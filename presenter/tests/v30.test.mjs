import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parseDeck,attachKeyPoints} from '../core.mjs';
const root=new URL('../../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const folder='images/candidates/2026-10-08-v30-slides-01-56-slide05-integrated/';
const oldFolder='images/candidates/2026-10-07-v29-slides-01-56-trace-bridge/';
const manifest=JSON.parse(read(folder+'manifest.json'));
const old=JSON.parse(read(oldFolder+'manifest.json'));
const sha=p=>createHash('sha256').update(fs.readFileSync(new URL(p,root))).digest('hex');
test('v30 replaces only the approved slide05 without changing the other55 images or notes',()=>{
  assert.equal(manifest.count,56);
  assert.equal(manifest.entries[4].sha256,'709ac9fdc7a3ea9fdc1288beb09fe07aa617fb93bcd3c3bd6943e6387a01858e');
  for(const [i,e] of manifest.entries.entries()){
    assert.equal(e.n,i+1);
    assert.equal(sha(folder+e.file),e.sha256);
    assert.equal(sha(oldFolder+old.entries[i].file),old.entries[i].sha256);
    if(i!==4){
      assert.equal(e.sha256,old.entries[i].sha256);
      for(const key of ['title','核心訊息','畫面文字','畫面設計','搭配講稿','接下一頁','points'])assert.deepEqual(e[key],old.entries[i][key]);
    }
  }
  assert.equal(manifest.entries[4].status,'user_accepted');
  for(const term of ['Model Choice','Controllability','Governance'])assert(manifest.entries[4]['畫面文字'].includes(term));
  assert(!manifest.entries[4]['搭配講稿'].includes('執行邊界'));
});
test('v30 source storyboard, gallery, presenter and55 unchanged transitions match',()=>{
  const slides=attachKeyPoints(parseDeck(read('storyboard/56-slide-storyboard-v30-integrated.md'),manifest),manifest.entries);
  const deck=JSON.parse(read('presenter/deck.json'));
  assert.equal(deck.count,56);
  for(const [i,e] of manifest.entries.entries()){
    assert.equal(slides[i].notes,e['搭配講稿']);
    if(deck.imageVersion==='v30'){
      assert.equal(deck.slides[i].notes,e['搭配講稿']);
      assert.deepEqual(deck.slides[i].points,e.points);
      assert.equal(deck.slides[i].transition,e['接下一頁']);
    }
  }
  for(const file of ['gallery.html','gallery-images-only.html']){
    const html=read(folder+file);
    assert.equal([...html.matchAll(/<img src="slide-\d{2}\.png/g)].length,56);
    assert(html.includes(manifest.entries[4].sha256.slice(0,12)));
  }
});
