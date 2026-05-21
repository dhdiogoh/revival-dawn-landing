import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const src = 'public/images/rvl26-images';
const thumbDir = `${src}/thumbs`;
const fullDir  = `${src}/full`;

await mkdir(thumbDir, { recursive: true });
await mkdir(fullDir,  { recursive: true });

const files = (await readdir(src)).filter(f => /\.(jpe?g|png)$/i.test(f));

console.log(`Convertendo ${files.length} imagens...\n`);

for (const file of files) {
  const input = join(src, file);
  const name  = file.replace(/\.(jpe?g|png)$/i, '.webp');

  const [thumb, full] = await Promise.all([
    sharp(input).resize({ width: 600 }).webp({ quality: 72, effort: 4 }).toFile(join(thumbDir, name)),
    sharp(input).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82, effort: 4 }).toFile(join(fullDir, name)),
  ]);

  const origKB  = Math.round((await import('fs')).statSync(input).size / 1024);
  const thumbKB = Math.round(thumb.size / 1024);
  const fullKB  = Math.round(full.size / 1024);
  console.log(`${file}`);
  console.log(`  original: ${origKB}KB  →  thumb: ${thumbKB}KB  |  full: ${fullKB}KB\n`);
}

console.log('Concluído!');
