import { readdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MEDIA_DIR = join(__dirname, "../public/media");
const OUTPUT_FILE = join(__dirname, "../app/lib/blurPlaceholders.json");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const PLACEHOLDER_WIDTH = 16;

async function generate() {
  const files = await readdir(MEDIA_DIR);
  const images = files.filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f).toLowerCase()),
  );

  const placeholders = {};

  for (const file of images) {
    const buffer = await sharp(join(MEDIA_DIR, file))
      .resize(PLACEHOLDER_WIDTH)
      .blur()
      .toFormat("webp", { quality: 20 })
      .toBuffer();

    const key = `/media/${file}`;
    placeholders[key] = `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(placeholders, null, 2) + "\n",
  );

  console.log(
    `Blur » Generated placeholders for ${images.length} images`,
  );
}

generate();
