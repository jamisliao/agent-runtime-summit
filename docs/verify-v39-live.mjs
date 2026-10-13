import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url);
const cfg=JSON.parse(fs.readFileSync(new URL('presenter/deck-config.json',root)));
const manifest=JSON.parse(fs.readFileSync(new URL(cfg.imageDirectory+'/manifest.json',root)));
const expected=JSON.parse(fs.readFileSync(new URL('presenter/deck.json',root)));
const origin='http://127.0.0.1:8767';
const deck=await (await fetch(origin+'/deck.json')).json();
assert.deepEqual(deck,expected);assert.equal(deck.count,58);assert.equal(deck.imageVersion,'v39');
for(const [i,s] of deck.slides.entries()){
  const r=await fetch(origin+s.src);assert.equal(r.status,200);
  assert.equal(createHash('sha256').update(Buffer.from(await r.arrayBuffer())).digest('hex'),manifest.entries[i].sha256);
}
for(const p of ['/','/projection.html','/styles.css','/presenter.mjs','/projection.mjs','/core.mjs','/deck.json'])assert.equal((await fetch(origin+p)).status,200,p);
for(const p of ['/.git/config','/deck-config.json','/serve.py','/slides/slide-59.png'])assert.equal((await fetch(origin+p)).status,404,p);
console.log('PASS: live v39 deck and all58 PNG hashes match disk; seven UI routes200; private/out-of-range routes404.');
