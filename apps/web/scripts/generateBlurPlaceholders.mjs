import { readdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const OPTIMIZED_DIR = join(__dirname, "../public/optimized");
const OUTPUT_FILE = join(__dirname, "../app/lib/blurPlaceholders.json");
const PLACEHOLDER_WIDTH = 16;

async function generate() {
  const placeholders = {};
  const files = await readdir(OPTIMIZED_DIR).catch(() => []);
  const avifFiles = files.filter(
    (f) => extname(f).toLowerCase() === ".avif",
  );

  for (const file of avifFiles) {
    const buffer = await sharp(join(OPTIMIZED_DIR, file))
      .resize(PLACEHOLDER_WIDTH)
      .blur()
      .toFormat("webp", { quality: 20 })
      .toBuffer();

    placeholders[`/optimized/${file}`] = `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  await writeFile(
    OUTPUT_FILE,
    JSON.stringify(placeholders, null, 2) + "\n",
  );

  console.log(
    `Blur » Generated placeholders for ${avifFiles.length} AVIF image(s)`,
  );
}

generate();
