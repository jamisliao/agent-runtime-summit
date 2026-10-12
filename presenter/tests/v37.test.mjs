import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parseDeck,attachKeyPoints,navigationIndex} from '../core.mjs';
const root=new URL('../../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const folder='images/candidates/2026-10-13-v37-slides-01-56-no-numbers/';
const m=JSON.parse(read(folder+'manifest.json'));
test('v37 preserves original55 order, inserts only Lost in the Middle at13, and has no embedded numbers',()=>{
  assert.equal(m.count,56); assert.equal(m.entries.length,56);
  assert.equal(m.entries[12].previousPlayback,null);
  assert.equal(m.entries[12].title,'資訊放在中間，也可能比較難被用到');
  assert.deepEqual(m.entries.filter(e=>e.previousPlayback).map(e=>e.previousPlayback),Array.from({length:55},(_,i)=>i+1));
  for(const e of m.entries){
    assert.equal(e.embeddedPageNumber,null);
    assert.equal(e.outsideRepairRegionChangedPixels,0);
    const b=fs.readFileSync(new URL(folder+e.file,root));
    assert.equal(createHash('sha256').update(b).digest('hex'),e.sha256);
    assert.deepEqual([b.readUInt32BE(16),b.readUInt32BE(20)],[e.pixelSize.width,e.pixelSize.height]);
  }
  assert.equal(navigationIndex(0,56,{key:'End'}),55);
});
test('v37 configured presenter has exact notes, points, transitions and hashes for56 slides',()=>{
  const cfg=JSON.parse(read('presenter/deck-config.json'));
  assert.equal(cfg.imageVersion,'v37');assert.equal(cfg.notesVersion,'v37');
  const expected=attachKeyPoints(parseDeck(read(cfg.storyboard),m),m.entries);
  const actual=JSON.parse(read('presenter/deck.json'));
  assert.equal(actual.count,56);assert.equal(actual.slides.length,56);
  for(const[i,s] of expected.entries()){
    assert.deepEqual(actual.slides[i],{...s,src:s.src+'?v='+m.entries[i].sha256});
  }
  assert(actual.slides[36].notes.includes('實際使用'));
  assert(actual.slides[37].notes.includes('呼叫參數與結果'));
});
test('published galleries and README use56 valid local images',()=>{
  for(const file of ['gallery.html','gallery-images-only.html']){
    const h=read(folder+file);const imgs=[...h.matchAll(/<img[^>]*src="([^"]+)"/g)];
    assert.equal(imgs.length,56);
    for(const img of imgs)assert(fs.existsSync(new URL(folder+img[1],root)));
  }
  assert.equal([...read(folder+'README.md').matchAll(/!\[[^\]]*\]\((slide-\d{2}\.png)\)/g)].length,56);
});
