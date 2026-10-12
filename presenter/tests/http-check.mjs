import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const repo = new URL('../../',import.meta.url);
const config = JSON.parse(await readFile(new URL('../deck-config.json',import.meta.url),'utf8'));
const manifest = JSON.parse(await readFile(new URL(config.imageDirectory + '/manifest.json',repo),'utf8'));
const base = process.argv[2] || 'http://127.0.0.1:8767';
const response = await fetch(`${base}/deck.json`);
assert.equal(response.status,200);
const deck = await response.json();
assert.equal(deck.slides.length,config.count);
assert.equal(deck.imageVersion,config.imageVersion);
assert.equal(deck.notesVersion,config.notesVersion);
for (const slide of deck.slides) {
  assert.ok(slide.message && slide.displayMessage,`slide ${slide.n} message`);
  assert.ok(slide.points.length >= 2 && slide.points.length <= 3,`slide ${slide.n} key points`);
  const entry = manifest.entries[slide.n-1];
  assert.equal(slide.title,entry.title);
  assert.equal(slide.notes,entry['搭配講稿']);
  assert.equal(slide.transition,entry['接下一頁']);
  assert.deepEqual(slide.points,entry.points);
  const image = await fetch(`${base}${slide.src}`,{method:'HEAD'});
  assert.equal(image.status,200,`slide ${slide.n}`);
  assert.equal(image.headers.get('content-type'),'image/png');
  assert.ok(Number(image.headers.get('content-length')) > 1000);
  const actualImage = await fetch(`${base}${slide.src}`);
  const data = Buffer.from(await actualImage.arrayBuffer());
  assert.equal(createHash('sha256').update(data).digest('hex'),entry.sha256,`wrong image ${slide.n}`);
}
for (const file of ['index.html','projection.html','core.mjs','presenter.mjs','projection.mjs','styles.css']) {
  const result = await fetch(`${base}/${file}`);
  assert.equal(result.status,200,file);
  assert.equal(result.headers.get('x-content-type-options'),'nosniff');
  if (file.endsWith('.mjs')) assert.equal(result.headers.get('content-type'),'text/javascript');
  if (file === 'projection.html' || file === 'projection.mjs') {
    assert.ok(!(await result.text()).includes('deck.json'),'projection must not request speaker deck');
  }
}
for (const path of ['/.git/config','/serve.py','/README.md','/deck-config.json','/history/v14-60/deck.json','/manuscript/complete-manuscript-v3.1.md',`/slides/slide-${config.count+1}.png`,'/slides/slide-60.png','/slides/slide-61.png']) {
  assert.equal((await fetch(`${base}${path}`)).status,404,path);
}
console.log(`PASS: ${config.count} PNG hashes match ${config.imageVersion} + exact notes/key-point sets + deck + 6 UI assets; private/out-of-range routes rejected; projection has no notes data request.`);
