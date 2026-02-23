# Blur-Up Image Placeholder System

A build-time blur placeholder system for Next.js static exports (e.g. GitHub Pages). Uses `sharp` to generate tiny base64-encoded blurred versions of images at build time, then displays them instantly while the full image loads — fading smoothly from blur to sharp.

## Architecture overview

1. `scripts/generateBlurPlaceholders.mjs` scans `public/` recursively for images
2. Each image is resized to 16px wide, blurred, and encoded as a base64 WebP data URI (~100 bytes each)
3. The data URIs are written to `app/lib/blurPlaceholders.json`
4. `components/AppImage.tsx` reads the JSON manifest, renders the blur inline, and fades in the real image on load
5. `components/ui/img.tsx` re-exports `AppImage` as `<Img>` for convenience

## Critical rules

Follow these rules when working with this system. Every rule addresses a real bug that has occurred in production.

### Rule 1: Every `<Img>` / `<AppImage>` MUST have either `fill` OR explicit `width` + `height`

When an image exists in the blur manifest, the component renders a wrapper `<div>` around `next/image`. Next.js `<Image>` **requires** either `fill` or both `width` and `height`. Omitting them causes a runtime crash:

> `Image with src "..." is missing required "width" property.`

**Choose the correct mode:**

| Use case | Props required | Example |
|---|---|---|
| Image fills its parent container (heroes, backgrounds, cards) | `fill` + parent with `position: relative` and dimensions | `<Img src="/hero.png" alt="..." fill className="object-cover" />` |
| Image has known/fixed display size (logos, icons, thumbnails) | `width` + `height` | `<Img src="/logo.png" alt="..." width={120} height={48} />` |
| Full-width image without a sized parent | Wrap in a `<div>` with `relative`, `aspect-[W/H]`, `overflow-hidden`, then use `fill` | See example below |

**Full-width image pattern:**

```tsx
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
  <Img
    src="/photo.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

**Never do this:**

```tsx
// WRONG — will crash at runtime if the image is in the blur manifest
<Img src="/photo.jpg" alt="..." className="w-full rounded-3xl" />
```

### Rule 2: The generation script MUST create the output directory

The output file `app/lib/blurPlaceholders.json` is gitignored and regenerated on every build. In CI, the `app/lib/` directory may not exist. The script **must** call `mkdir` with `{ recursive: true }` before `writeFile`:

```js
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join, dirname, extname } from "node:path";

// ... before writing:
await mkdir(dirname(OUTPUT_FILE), { recursive: true });
await writeFile(OUTPUT_FILE, JSON.stringify(placeholders, null, 2) + "\n");
```

Without this, CI fails with `ENOENT: no such file or directory`.

### Rule 3: The generated JSON file MUST be gitignored

`app/lib/blurPlaceholders.json` is a build artifact. Add it to `.gitignore`:

```
app/lib/blurPlaceholders.json
```

It is regenerated on every build via `prebuild` and in CI via an explicit step.

### Rule 4: CI MUST run blur generation before build

The GitHub Actions workflow must include an explicit generation step. Do not rely solely on `prebuild` — the `postinstall` hook runs during `pnpm install` when the directory may not exist yet, and `prebuild` behaviour varies across package managers.

```yaml
- name: Install dependencies
  run: pnpm install --frozen-lockfile

- name: Generate blur placeholders
  run: pnpm generate:blur

- name: Build
  run: pnpm build
```

### Rule 5: The blur manifest key MUST match the `src` prop exactly

The script generates keys like `"/logo.png"` or `"/media/hero.jpg"` (relative to `public/`). The `src` prop passed to `<Img>` must use the same path string — otherwise the component won't find a blur entry and falls back to plain `<Image>`.

## Component reference

### Three rendering modes

| Mode | Trigger | Wrapper | Blur | Image |
|------|---------|---------|------|-------|
| **Fill** | `fill` prop | `position: absolute; inset: 0` | absolute inside wrapper | `fill` (absolute) |
| **Sized** | `width` + `height` props | `position: relative` | absolute inside wrapper | in-flow (determines wrapper height) |
| **No blur** | image not in manifest | no wrapper | none | plain `<Image>` passthrough |

### Base path handling

`AppImage` reads `NEXT_PUBLIC_BASE_PATH` and prepends it to `src` paths starting with `/`. This is required for GitHub Pages deployments under a subpath (e.g. `/Luups`).

## package.json scripts

```json
{
  "scripts": {
    "generate:blur": "node scripts/generateBlurPlaceholders.mjs",
    "prebuild": "node scripts/generateBlurPlaceholders.mjs",
    "postinstall": "node scripts/generateBlurPlaceholders.mjs",
    "build": "next build",
    "clean": "rimraf .next .turbo node_modules out app/lib/blurPlaceholders.json"
  }
}
```

- `prebuild` runs automatically before `build`
- `postinstall` runs after `pnpm install` so the JSON exists for local dev
- `generate:blur` for manual regeneration after adding new images
- `clean` removes the generated JSON alongside other build artifacts

## Adding new images

1. Place image files in `public/` (any subdirectory)
2. Run `pnpm generate:blur` to regenerate the manifest
3. Use `<Img>` with the correct `src` path and **always** provide `fill` or `width` + `height`
4. The next `pnpm build` will also regenerate automatically via `prebuild`

## Adapting to your project

| What to change | Where |
|---|---|
| Image source directory | `PUBLIC_DIR` in the script |
| Output JSON location | `OUTPUT_FILE` in the script |
| Key format (must match `src` prop) | `key` variable in the script loop |
| Blur intensity | `PLACEHOLDER_WIDTH` (smaller = more blur) and `.blur()` sigma |
| Transition duration | `500ms` values in the component CSS |
| Base path prefix | `NEXT_PUBLIC_BASE_PATH` env variable |
