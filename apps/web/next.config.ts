import { readFileSync } from "node:fs";
import path, { resolve } from "node:path";
import type { NextConfig } from "next";

const rootPackageJson: { version: string } = JSON.parse(
  readFileSync(resolve(__dirname, "../../package.json"), "utf-8"),
);

const nextConfig: NextConfig = {
  output: "standalone",
  // Monorepo: without this, output file tracing only inspects apps/web and
  // misses `@app/ui` (workspace:*) and the root pnpm-lock.yaml — the traced
  // standalone server would fail to resolve its own workspace dependency.
  outputFileTracingRoot: path.join(__dirname, "../../"),
  images: {
    // AVIF isn't served by default (costlier to encode) — opt in since the
    // runtime optimizer already caches its output.
    formats: ["image/avif", "image/webp"],
    // Default is 14400s (4h): confirmed live via the `cache-control` header
    // on /_next/image responses. Cold-cache AVIF re-encodes of the full-res
    // blob originals measured 5-9s, so a 4h TTL means visitors regularly eat
    // that stall. Gallery image URLs are effectively immutable (fixed
    // filenames), so cache them for longer. Per Next's docs there's no
    // invalidation mechanism — if a source file at the same URL is ever
    // replaced, clear `.next/cache/images` (or bump this app's deploy, since
    // that cache currently lives inside the container image) rather than
    // waiting out the TTL.
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.arthurtoppenberg.dk",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: rootPackageJson.version,
  },
};

export default nextConfig;
