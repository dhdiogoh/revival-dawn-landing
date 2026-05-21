import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join } from 'path';

const dir = 'public/images/preletores-rvl-26';
const files = await readdir(dir);
const jpgs = files.filter(f => /\.(jpe?g|png)$/i.test(f));

for (const file of jpgs) {
  const input = join(dir, file);
  const output = join(dir, file.replace(/\.(jpe?g|png)$/i, '.webp'));

  const info = await sharp(input)
    .webp({ quality: 82, effort: 5 })
    .toFile(output);

  const orig = (await import('fs')).statSync(input).size;
  const savings = (((orig - info.size) / orig) * 100).toFixed(1);
  console.log(`${file} → ${output.split('/').pop()}  ${(orig/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB  (-${savings}%)`);
}
