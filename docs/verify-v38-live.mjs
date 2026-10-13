import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url);
const cfg=JSON.parse(fs.readFileSync(new URL('presenter/deck-config.json',root)));
const manifest=JSON.parse(fs.readFileSync(new URL(cfg.imageDirectory+'/manifest.json',root)));
const expected=JSON.parse(fs.readFileSync(new URL('presenter/deck.json',root)));
const origin='http://127.0.0.1:8767';
const deck=await (await fetch(origin+'/deck.json')).json();
assert.deepEqual(deck,expected);assert.equal(deck.count,58);
for(const [i,slide] of deck.slides.entries()){
  const res=await fetch(origin+slide.src);assert.equal(res.status,200);
  const bytes=Buffer.from(await res.arrayBuffer());
  assert.equal(createHash('sha256').update(bytes).digest('hex'),manifest.entries[i].sha256);
}
for(const p of ['/','/projection.html','/styles.css','/presenter.mjs','/projection.mjs','/core.mjs','/deck.json'])assert.equal((await fetch(origin+p)).status,200,p);
for(const p of ['/.git/config','/deck-config.json','/serve.py','/slides/slide-59.png'])assert.equal((await fetch(origin+p)).status,404,p);
console.log('PASS: live v38 deck matches disk; all58 PNG hashes match; seven UI routes200; private/out-of-range routes404.');
