import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parseDeck,attachKeyPoints} from '../core.mjs';
const root=new URL('../../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root));
const json=p=>JSON.parse(read(p));
const cfg=json('presenter/deck-config.json');
const folder=cfg.imageDirectory+'/';
const m=json(folder+'manifest.json');
const base='images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro/';
test('v39 preserves58 positions and50 original PNGs with no Judge insertion',()=>{
  assert.equal(cfg.count,58);assert.equal(cfg.imageVersion,'v39');assert.equal(m.entries.length,58);
  for(const [i,e] of m.entries.entries()){
    assert.equal(e.n,i+1);assert.equal(e.previousV38,i+1);assert.equal(e.embeddedPageNumber,null);
    const bytes=read(folder+e.file);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),e.sha256);
    assert.equal(bytes.equals(read(base+e.file)),![23,24,25,26,28,30,34,38].includes(e.n));
  }
});
test('v39 published deck contains matching notes, transitions and image hashes',()=>{
  const actual=json('presenter/deck.json');
  const expected=attachKeyPoints(parseDeck(read(cfg.storyboard).toString(),m),m.entries);
  assert.equal(actual.count,58);
  expected.forEach((s,i)=>assert.deepEqual(actual.slides[i],{...s,src:s.src+'?v='+m.entries[i].sha256}));
  assert.equal(actual.slides[22].title,'把實際執行，對回任務要求');
  assert.equal(actual.slides[23].title,'Evaluation 要看結果，也要看執行過程');
  assert(actual.slides[24].notes.includes('用程式核對即可'));
  assert.equal(actual.slides[26].title,'固定條件重跑，觀察流程是否穩定');
  assert.equal(actual.slides[27].title,'測試全過，不代表下次一定照做');
  assert(!actual.slides.some(s=>s.notes.includes('Tool只回傳timeout')));
});
test('v39 galleries and README contain58 existing images',()=>{
  for(const f of ['gallery.html','gallery-images-only.html']){
    const refs=[...read(folder+f).toString().matchAll(/<img[^>]*src="([^"]+)"/g)];
    assert.equal(refs.length,58);refs.forEach(r=>assert(fs.existsSync(new URL(folder+r[1].split('?')[0],root))));
  }
  assert.equal([...read(folder+'README.md').toString().matchAll(/!\[[^\]]*\]\((slide-\d{2}\.png)\)/g)].length,58);
});
