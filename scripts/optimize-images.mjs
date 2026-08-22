import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in ${imagesDir}`);

  let totalOldSize = 0;
  let totalNewSize = 0;

  for (const file of files) {
    if (!file.endsWith('.png') && !file.endsWith('.jpg') && !file.endsWith('.jpeg')) continue;

    const inputPath = path.join(imagesDir, file);
    const stat = fs.statSync(inputPath);
    totalOldSize += stat.size;

    const baseName = path.parse(file).name;
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    try {
      await sharp(inputPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(outputPath);

      const newStat = fs.statSync(outputPath);
      totalNewSize += newStat.size;
      console.log(`✓ Converted ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB) -> ${baseName}.webp (${(newStat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log(`\n🎉 Optimization Complete!`);
  console.log(`Original total size: ${(totalOldSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized WebP total size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Bandwidth Saved: ${(((totalOldSize - totalNewSize) / totalOldSize) * 100).toFixed(1)}%`);
}

optimizeImages();
