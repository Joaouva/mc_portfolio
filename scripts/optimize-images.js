const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = path.join(__dirname, '..', 'public', 'images', 'temp');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'projects', 'project-one');
const MAX_WIDTH = 1920; // Max width for images
const QUALITY = 85; // WebP quality (0-100)

async function optimizeImage(inputPath, outputPath) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const outputFilePath = path.join(outputPath, `${filename}.webp`);

    await sharp(inputPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputFilePath);

    const stats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputFilePath);
    const reduction = ((1 - outputStats.size / stats.size) * 100).toFixed(2);

    console.log(`✓ Optimized ${filename}`);
    console.log(`  Original: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`  Optimized: ${(outputStats.size / 1024).toFixed(2)} KB`);
    console.log(`  Reduction: ${reduction}%\n`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  // Create directories if they don't exist
  if (!fs.existsSync(SOURCE_DIR)) {
    fs.mkdirSync(SOURCE_DIR, { recursive: true });
    console.log(`📁 Created source directory: ${SOURCE_DIR}`);
    console.log('Please place your images in this directory and run the script again.');
    return;
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all image files from source directory
  const files = fs.readdirSync(SOURCE_DIR)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  if (files.length === 0) {
    console.log('⚠️  No images found in the source directory.');
    console.log(`Please place your images in: ${SOURCE_DIR}`);
    return;
  }

  console.log(`🖼️  Found ${files.length} image(s) to optimize\n`);

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    await optimizeImage(inputPath, OUTPUT_DIR);
  }

  console.log('✅ All images optimized successfully!');
  console.log(`📂 Optimized images saved to: ${OUTPUT_DIR}`);
}

processImages().catch(console.error);
