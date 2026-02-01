const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const full = path.join(imagesDir, file);
  const name = path.basename(file, ext);
  const webpOut = path.join(imagesDir, `${name}.webp`);
  const avifOut = path.join(imagesDir, `${name}.avif`);

  try {
    await sharp(full).toFile(webpOut, { quality: 80 });
    await sharp(full).toFile(avifOut, { quality: 50 });
    console.log('Converted', file, '->', `${name}.webp, ${name}.avif`);
  } catch (e) {
    console.error('Error converting', file, e.message);
  }
}

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Unable to scan images directory', err);
    process.exit(1);
  }

  Promise.all(files.map(convertFile)).then(() => {
    console.log('Image conversion complete');
  });
});
