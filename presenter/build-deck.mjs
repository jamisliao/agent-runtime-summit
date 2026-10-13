import { readFile, writeFile } from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import { parseDeck, attachKeyPoints } from './core.mjs';

const root = new URL('../', import.meta.url);
const config = JSON.parse(await readFile(new URL('./deck-config.json',import.meta.url),'utf8'));
const images = config.imageDirectory + '/';
const manuscript = await readFile(new URL(config.storyboard,root),'utf8');
const manifest = JSON.parse(await readFile(new URL(`${images}manifest.json`,root),'utf8'));
assert.equal(manifest.count,config.count);
const points = manifest.entries;
const slides = attachKeyPoints(parseDeck(manuscript,manifest),points);
for (const [index,entry] of manifest.entries.entries()) {
  const image = await readFile(new URL(`${images}${entry.file}`,root));
  const hash = createHash('sha256').update(image).digest('hex');
  assert.equal(hash,entry.sha256,`Image checksum mismatch: ${entry.n}`);
  assert.equal(slides[index].notes,entry['搭配講稿']);
  assert.equal(slides[index].transition,entry['接下一頁']);
  slides[index].src += '?v=' + hash;
}
await writeFile(new URL('./deck.json',import.meta.url), JSON.stringify({
  title:'自己刻 Agent 框架', id:config.id, count:config.count,
  imageVersion:config.imageVersion, notesVersion:config.notesVersion, status:manifest.status, slides
}, null, 2)+'\n');
const review = `# Agent Runtime｜${config.count}頁講述重點\n\n依${config.notesVersion}分頁稿整理，對應${config.imageVersion}圖片。每頁保留來源主旨、2–3個講述重點及轉場，這是講者提示，不取代原講稿。\n\n` +
  slides.map(slide => `## ${String(slide.n).padStart(2,'0')}｜${slide.title}\n\n主旨：${slide.displayMessage}\n\n${slide.points.map(point => `- ${point}`).join('\n')}\n\n接下一頁：${slide.transition}\n`).join('\n');
const pointsFile = config.keyPointsFile || `${config.count}-page-key-points.md`;
await writeFile(new URL('./'+pointsFile,import.meta.url),review);
console.log(`Built ${slides.length} slides: images ${config.imageVersion}, notes ${config.notesVersion}; image hashes and notes checked. Exported ${pointsFile}.`);
