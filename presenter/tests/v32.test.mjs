import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parseDeck,attachKeyPoints} from '../core.mjs';
const root=new URL('../../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const folder='images/candidates/2026-10-08-v32-slides-01-56-log-context-integrated/';
const previousFolder='images/candidates/2026-10-08-v30-slides-01-56-slide05-integrated/';
const manifest=JSON.parse(read(folder+'manifest.json'));
const previous=JSON.parse(read(previousFolder+'manifest.json'));
const sha=p=>createHash('sha256').update(fs.readFileSync(new URL(p,root))).digest('hex');
test('v32 integrates the two approved images and preserves54 other images and content',()=>{
  assert.equal(manifest.count,56);
  assert.deepEqual(manifest.replacedImagePages,[10,11]);
  for(const [i,e] of manifest.entries.entries()){
    assert.equal(e.n,i+1);
    assert.equal(sha(folder+e.file),e.sha256);
    assert.equal(sha(previousFolder+e.file),previous.entries[i].sha256);
    if([10,11].includes(e.n)){
      assert.equal(sha('images/candidates/2026-10-08-v31-log-10-11-preview/'+e.file),e.sha256);
      assert.equal(e.status,'user_accepted');
    }else{
      assert.equal(e.sha256,previous.entries[i].sha256);
      for(const key of ['title','核心訊息','畫面文字','畫面設計','搭配講稿','接下一頁','points'])assert.deepEqual(e[key],previous.entries[i][key]);
    }
  }
  assert.equal(manifest.entries[9].title,'查線上問題，卻把 Context 塞爆了');
  assert.equal(manifest.entries[10].title,'Log 先篩選，再放進 Context');
});
test('v32 source notes and all56 presenter images, titles, points and transitions match',()=>{
  const slides=attachKeyPoints(parseDeck(read('storyboard/56-slide-storyboard-v32-integrated.md'),manifest),manifest.entries);
  const deck=JSON.parse(read('presenter/deck.json'));
  assert.equal(deck.imageVersion,'v32');
  assert.equal(deck.notesVersion,'v32');
  assert.equal(deck.slides.length,56);
  for(const [i,e] of manifest.entries.entries()){
    assert.equal(slides[i].notes,e['搭配講稿']);
    assert.equal(deck.slides[i].title,e.title);
    assert.equal(deck.slides[i].notes,e['搭配講稿']);
    assert.deepEqual(deck.slides[i].points,e.points);
    assert.equal(deck.slides[i].transition,e['接下一頁']);
    assert(deck.slides[i].src.endsWith(e.sha256));
  }
  assert(manifest.entries[10]['搭配講稿'].includes('不是每次都要做完四步'));
});
