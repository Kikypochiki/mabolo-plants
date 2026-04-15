import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';
const outputDir = 'public/images';
const MAX_SIZE = 400; // max width/height

const files = fs.readdirSync(inputDir).filter(f => 
  /\.(png|jpg|jpeg|webp)$/i.test(f)
);

console.log(`Found ${files.length} images to optimize\n`);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const outputPath = path.join(outputDir, `${name}.webp`);

  const originalSize = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath);

  const newSize = fs.statSync(outputPath).size;
  const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(`${file} → ${name}.webp  (${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, -${reduction}%)`);

  // Remove original if new is smaller
  if (newSize < originalSize) {
    fs.unlinkSync(inputPath);
  }
}

console.log('\nDone! All images optimized to WebP.');
