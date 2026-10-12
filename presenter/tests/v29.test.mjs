import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import * as core from '../core.mjs';
const repo = new URL('../../',import.meta.url);
const folder = 'images/candidates/2026-10-07-v29-slides-01-56-trace-bridge/';
const manifest = JSON.parse(await readFile(new URL(folder+'manifest.json',repo),'utf8'));
const story = await readFile(new URL('storyboard/56-slide-storyboard-v29-integrated.md',repo),'utf8');
const old = JSON.parse(await readFile(new URL('images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/manifest.json',repo),'utf8'));
test('v29 inserts one transition without losing the old 55 pages',()=>{
  assert.equal(manifest.count,56);
  assert.deepEqual(manifest.entries.map(e=>e.n),Array.from({length:56},(_,i)=>i+1));
  assert.deepEqual(manifest.entries.filter(e=>e.previous55Page!==null).map(e=>e.previous55Page),old.entries.map(e=>e.n));
  assert.equal(manifest.entries[35].title,'有人審核，任務仍可能出錯');
  assert.equal(manifest.entries[36].title,'回到 Builder 案例：漏掉的步驟，怎麼追查？');
  assert.equal(manifest.entries[37].title,old.entries[36].title);
  assert.equal(manifest.entries[55].title,old.entries[54].title);
  for(let i=0;i<35;i++) assert.equal(manifest.entries[i].sha256,old.entries[i].sha256);
});
test('all 56 source notes, points, transitions and image hashes match',async()=>{
  const slides=core.attachKeyPoints(core.parseDeck(story,manifest),manifest.entries);
  assert.equal(slides.length,56);
  for(const [i,slide] of slides.entries()){
    const e=manifest.entries[i];
    assert.equal(slide.title,e.title);assert.equal(slide.notes,e['搭配講稿']);
    assert.equal(slide.transition,e['接下一頁']);assert.deepEqual(slide.points,e.points);
    assert.equal(e.embeddedPageNumber,e.n);
    const bytes=await readFile(new URL(folder+e.file,repo));
    assert.equal(createHash('sha256').update(bytes).digest('hex'),e.sha256);
  }
});
test('56-page navigation and projection honor the new final page',()=>{
  assert.equal(core.navigationIndex(20,56,{key:'End'}),55);
  assert.equal(core.pageIndexFromInput('60',56),55);
  const message={type:'slide',index:55,count:56,revision:1,src:'/slides/slide-56.png?v='+'a'.repeat(64)};
  assert.equal(core.validProjectionSlide(message),true);
  assert.equal(core.validProjectionSlide({...message,index:56,src:'/slides/slide-57.png'}),false);
});
