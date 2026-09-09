// Prepara los activos del sitio:
//  1. Optimiza las 4 fotografías de public/images (longitud máx. 1600px, JPEG q82).
//  2. Genera los iconos PNG del PWA a partir de public/icons/favicon.svg.
// Uso: node scripts/prepare-assets.mjs
import { renameSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const imagesDir = path.join(root, 'public', 'images');
const iconsDir = path.join(root, 'public', 'icons');

const MAX_EDGE = 1600;
const JPEG_QUALITY = 82;

async function writeAtomic(target, buffer) {
  const tmp = `${target}.tmp-${Date.now()}`;
  await writeFile(tmp, buffer);
  renameSync(tmp, target);
}

async function optimizeImages() {
  const files = (await readdir(imagesDir)).filter((f) => f.toLowerCase().endsWith('.jpg'));
  let totalIn = 0;
  let totalOut = 0;
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const source = await readFile(filePath);
    const meta = await sharp(source).metadata();
    totalIn += meta.size ?? 0;
    const optimized = await sharp(source, { failOn: 'none' })
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
    await writeAtomic(filePath, optimized);
    const outMeta = await sharp(optimized).metadata();
    totalOut += outMeta.size ?? 0;
    console.log(`✓ ${file}: ${Math.round((meta.size ?? 0) / 1024)}KB → ${Math.round((outMeta.size ?? 0) / 1024)}KB (${outMeta.width}x${outMeta.height}px)`);
  }
  if (totalIn) {
    console.log(
      `Fotografías: ${Math.round(totalIn / 1024)}KB → ${Math.round(totalOut / 1024)}KB (${Math.round((1 - totalOut / totalIn) * 100)}% de reducción)`
    );
  }
}

async function generateIcons() {
  const svg = await readFile(path.join(iconsDir, 'favicon.svg'));
  const bg = { r: 24, g: 61, b: 56, alpha: 1 };

  const items = [
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'maskable-512.png', size: 512 }
  ];

  for (const { name, size } of items) {
    const rounded = await sharp(svg, { failOn: 'none' })
      .resize(size, size, { fit: 'cover' })
      .png()
      .toBuffer();
    // Icono con esquinas transparentes ya trae su propio fondo #183d38;
    // lo aplanamos sobre el mismo color para una versión full-bleed (maskable/standalone).
    const full = await sharp({
      create: { width: size, height: size, channels: 4, background: bg }
    })
      .composite([{ input: rounded }])
      .png()
      .toBuffer();
    await writeAtomic(path.join(iconsDir, name), full);
    console.log(`✓ ${name} (${size}x${size})`);
  }
}

async function main() {
  await mkdir(imagesDir, { recursive: true });
  await optimizeImages();
  await generateIcons();
  // Limpieza defensiva de temporales si algún run anterior quedó a medias.
  const leftovers = (await readdir(imagesDir)).filter((f) => f.endsWith('.tmp-') || /\.web\.jpg$/.test(f) || f.endsWith('.tmp.jpg'));
  for (const f of leftovers) {
    await unlink(path.join(imagesDir, f)).catch(() => {});
  }
  console.log('Listo.');
}

await main();
