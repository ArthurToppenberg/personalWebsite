import { readdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MEDIA_DIR = join(__dirname, "../public/media");
const OPTIMIZED_DIR = join(__dirname, "../public/optimized");
const OUTPUT_FILE = join(__dirname, "../app/lib/blurPlaceholders.json");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);
const PLACEHOLDER_WIDTH = 16;

async function addPlaceholdersForDir(placeholders, dir, urlPrefix) {
  const files = await readdir(dir).catch(() => []);
  const images = files.filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f).toLowerCase()),
  );

  for (const file of images) {
    const buffer = await sharp(join(dir, file))
      .resize(PLACEHOLDER_WIDTH)
      .blur()
      .toFormat("webp", { quality: 20 })
      .toBuffer();

    placeholders[`${urlPrefix}${file}`] = `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  return images.length;
}

async function generate() {
  const placeholders = {};
  const mediaCount = await addPlaceholdersForDir(placeholders, MEDIA_DIR, "/media/");
  const optimizedCount = await addPlaceholdersForDir(placeholders, OPTIMIZED_DIR, "/optimized/");

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(placeholders, null, 2) + "\n",
  );

  console.log(
    `Blur » Generated placeholders for ${mediaCount + optimizedCount} images (${mediaCount} media, ${optimizedCount} optimized)`,
  );
}

generate();
