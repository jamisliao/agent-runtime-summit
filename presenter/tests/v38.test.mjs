import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {parseDeck,attachKeyPoints,navigationIndex} from '../core.mjs';
const root=new URL('../../',import.meta.url);
const folder='images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro/';
const read=p=>fs.readFileSync(new URL(p,root));
const json=p=>JSON.parse(read(p));
const m=json(folder+'manifest.json');
const baseline='37b1b62e269bed2d2974b8684a1f27165d8a6d4a';
test('v38 keeps57 published images byte-identical and replaces only21',()=>{
  assert.equal(m.count,58);assert.equal(m.entries.length,58);
  for(const e of m.entries){
    const bytes=read(folder+e.file);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),e.sha256);
    assert.equal(e.embeddedPageNumber,null);
    assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],[e.pixelSize.width,e.pixelSize.height]);
    const old=execFileSync('git',['show',baseline+':'+folder+e.file],{cwd:root,maxBuffer:20*1024*1024});
    assert.equal(bytes.equals(old),e.n!==21);
  }
  assert.deepEqual(m.entries.filter(e=>e.previousV37).map(e=>e.previousV37),Array.from({length:56},(_,i)=>i+1));
  assert.equal(navigationIndex(0,58,{key:'End'}),57);
});
test('v38 active deck matches58 images, notes, points and transitions',()=>{
  const cfg=json('presenter/deck-config.json');
  assert.equal(cfg.count,58);assert.equal(cfg.imageVersion,'v38');assert.equal(cfg.notesVersion,'v38');
  assert.equal(cfg.imageDirectory+'/',folder);
  const expected=attachKeyPoints(parseDeck(read(cfg.storyboard).toString(),m),m.entries);
  const actual=json('presenter/deck.json');
  assert.equal(actual.count,58);assert.equal(actual.slides.length,58);
  expected.forEach((s,i)=>assert.deepEqual(actual.slides[i],{...s,src:s.src+'?v='+m.entries[i].sha256}));
  assert(actual.slides[20].notes.includes('驗收卡'));
  assert(!actual.slides[20].notes.includes('三步'));
  assert(actual.slides[21].notes.includes('這就是Evaluation'));
  assert(actual.slides[22].notes.includes('沿用'));
});
test('v38 galleries and README contain58 valid local images',()=>{
  for(const file of ['gallery.html','gallery-images-only.html']){
    const imgs=[...read(folder+file).toString().matchAll(/<img[^>]*src="([^"]+)"/g)];
    assert.equal(imgs.length,58);
    imgs.forEach(img=>assert(fs.existsSync(new URL(folder+img[1].split('?')[0],root))));
  }
  assert.equal([...read(folder+'README.md').toString().matchAll(/!\[[^\]]*\]\((slide-\d{2}\.png)\)/g)].length,58);
});
