import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import { statSync } from 'fs';

const src      = 'public/images/rvl26-images/oficiais';
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
    sharp(input).resize({ width: 800 }).webp({ quality: 75, effort: 4 }).toFile(join(thumbDir, name)),
    sharp(input).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 84, effort: 4 }).toFile(join(fullDir, name)),
  ]);

  const origKB  = Math.round(statSync(input).size / 1024);
  console.log(`${file}  ${origKB}KB  →  thumb: ${Math.round(thumb.size/1024)}KB  |  full: ${Math.round(full.size/1024)}KB`);
}

console.log('\nConcluído!');
