import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve("public/images");
const files = (await readdir(dir)).filter((name) => /\.(jpe?g|png)$/i.test(name) && name !== "logo-source.png");

for (const name of files) {
  const source = path.join(dir, name);
  const output = path.join(dir, name.replace(/\.(jpe?g|png)$/i, ".webp"));
  await sharp(source).rotate().resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(output);
  await unlink(source);
}
console.log(`Optimized ${files.length} images`);
