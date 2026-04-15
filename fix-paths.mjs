import fs from 'fs';

const data = fs.readFileSync('src/data/plants.ts', 'utf8');
const updated = data
  .replace(/\/images\/([^'"]+)\.png/g, '/images/$1.webp')
  .replace(/\/images\/([^'"]+)\.jpg/g, '/images/$1.webp');
fs.writeFileSync('src/data/plants.ts', updated);
console.log('Updated all image paths to .webp');
