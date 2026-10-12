import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

let core = {};
try { core = await import('../core.mjs'); } catch (error) {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
}
const repo = new URL('../../', import.meta.url);
const manuscript = await readFile(new URL('storyboard/60-slide-storyboard-v13-review.md', repo), 'utf8');
const manifest = JSON.parse(await readFile(new URL('images/candidates/2026-09-28-v14-no-chapter-tags/manifest.json', repo), 'utf8'));

test('60 images match the existing per-slide notes and transitions without inventing text', async () => {
  assert.equal(typeof core.parseDeck, 'function');
  const slides = core.parseDeck(manuscript, manifest);
  assert.equal(slides.length, 60);
  for (const [index, slide] of slides.entries()) {
    assert.equal(slide.n, index + 1);
    assert.equal(slide.title, manifest.entries[index].title);
    assert.ok(slide.notes.length > 10);
    assert.ok(slide.transition);
    assert.ok(manuscript.includes(slide.notes));
    assert.equal(slide.src, `/slides/${manifest.entries[index].file}`);
    await access(new URL(`images/candidates/2026-09-28-v14-no-chapter-tags/${manifest.entries[index].file}`, repo));
  }
});
test('missing slide, mismatched title and missing notes fail closed', () => {
  assert.equal(typeof core.parseDeck, 'function');
  assert.throws(() => core.parseDeck(manuscript.replace('## Slide 30｜', '## Missing 30｜'), manifest));
  const changed = structuredClone(manifest);
  changed.entries[0].title = 'different';
  assert.throws(() => core.parseDeck(manuscript, changed), /title/i);
  assert.throws(() => core.parseDeck(manuscript.replace('### 搭配講稿', '### Missing'), manifest), /notes/i);
});
test('navigation clamps edges and ignores editable elements and modifiers', () => {
  assert.equal(typeof core.navigationIndex, 'function');
  assert.equal(core.navigationIndex(0, 60, {key:'ArrowLeft'}), 0);
  assert.equal(core.navigationIndex(59, 60, {key:'ArrowRight'}), 59);
  assert.equal(core.navigationIndex(9, 60, {key:'Home'}), 0);
  assert.equal(core.navigationIndex(9, 60, {key:'End'}), 59);
  assert.equal(core.navigationIndex(9, 60, {key:'PageDown'}), 10);
  assert.equal(core.navigationIndex(9, 60, {key:' ', target:{tagName:'BUTTON'}}), null);
  assert.equal(core.navigationIndex(9, 60, {key:'ArrowRight', target:{tagName:'BUTTON'}}), 10);
  for (const tagName of ['INPUT','TEXTAREA','SELECT']) {
    assert.equal(core.navigationIndex(9, 60, {key:'ArrowRight',target:{tagName}}), null);
  }
  assert.equal(core.navigationIndex(9, 60, {key:'ArrowRight',ctrlKey:true}), null);
  assert.equal(core.navigationIndex(9, 60, {key:'ArrowRight',target:{isContentEditable:true}}), null);
});
test('only same-origin messages from the dedicated popup with its session are accepted', () => {
  assert.equal(typeof core.acceptMessage, 'function');
  const popup = {};
  const event = {origin:'http://localhost:8766',source:popup,data:{session:'token',type:'ready'}};
  assert.ok(core.acceptMessage(event, popup, 'http://localhost:8766','token'));
  assert.equal(core.acceptMessage(event, {}, event.origin,'token'), false);
  assert.equal(core.acceptMessage(event, popup, 'https://foreign.example','token'), false);
  assert.equal(core.acceptMessage(event, popup, event.origin,'other'), false);
  assert.equal(core.acceptMessage({...event,data:null}, popup, event.origin,'token'), false);
});
test('old acknowledgements cannot claim a new slide was projected; failure preserves last shown slide', () => {
  assert.equal(typeof core.projectionAck, 'function');
  const state = {revision:3,requested:6,shown:4,status:'loading'};
  assert.deepEqual(core.projectionAck(state,{revision:2,index:5,type:'displayed'}), state);
  assert.deepEqual(core.projectionAck(state,{revision:3,index:5,type:'displayed'}), state);
  assert.equal(core.projectionAck(state,{revision:3,index:6,type:'displayed'}).shown,6);
  const failed = core.projectionAck(state,{revision:3,index:6,type:'load-error'});
  assert.equal(failed.shown,4);
  assert.equal(failed.status,'error');
});

test('rapid requests display only the latest loaded image even if an earlier image finishes later', async () => {
  assert.equal(typeof core.SlideLoader, 'function');
  const loads = new Map(), displayed = [], reports = [];
  const loader = new core.SlideLoader({load:src => new Promise((resolve,reject) => loads.set(src,{resolve,reject})),
    render:image => displayed.push(image), report:message => reports.push(message)});
  const old = loader.show({src:'old.png',index:1,revision:1});
  const next = loader.show({src:'new.png',index:2,revision:2});
  loads.get('new.png').resolve('new-image'); await next;
  loads.get('old.png').resolve('old-image'); await old;
  assert.deepEqual(displayed,['new-image']);
  assert.deepEqual(reports,[{type:'displayed',index:2,revision:2}]);
});
test('failed image loads do not replace the displayed image and report load-error', async () => {
  assert.equal(typeof core.SlideLoader, 'function');
  const displayed = [], reports = [];
  const loader = new core.SlideLoader({load:async src => {if (src === 'bad') throw new Error('missing'); return src;},
    render:image => displayed.push(image),report:message => reports.push(message)});
  await loader.show({src:'good',index:0,revision:1});
  await loader.show({src:'bad',index:1,revision:2});
  assert.deepEqual(displayed,['good']);
  assert.deepEqual(reports.at(-1),{type:'load-error',index:1,revision:2});
});

test('page entry commits valid numbers, clamps past the end, and rejects blank or noninteger input', () => {
  assert.equal(typeof core.pageIndexFromInput, 'function');
  assert.equal(core.pageIndexFromInput('25',60),24);
  assert.equal(core.pageIndexFromInput('1',60),0);
  assert.equal(core.pageIndexFromInput('61',60),59);
  for (const value of ['', ' ', '0','-1','Infinity','abc','2.5']) assert.equal(core.pageIndexFromInput(value,60),null);
});

test('all slides retain the source core message separately from notes', () => {
  const slides = core.parseDeck(manuscript, manifest);
  for (const slide of slides) {
    assert.ok(slide.message?.length > 10, `slide ${slide.n} main message`);
    assert.ok(manuscript.includes(slide.message));
  }
});

test('curated key points align with all 60 slides and reject missing, shifted or empty entries', () => {
  assert.equal(typeof core.attachKeyPoints, 'function');
  const slides = core.parseDeck(manuscript, manifest);
  const points = slides.map(slide => ({n:slide.n, points:['第一個重點','第二個重點']}));
  const result = core.attachKeyPoints(slides, points);
  assert.equal(result.length, 60);
  assert.deepEqual(result[24].points, points[24].points);
  assert.equal(result[24].notes, slides[24].notes);
  assert.throws(() => core.attachKeyPoints(slides, points.slice(1)));
  const shifted = structuredClone(points); shifted[24].n = 26;
  assert.throws(() => core.attachKeyPoints(slides, shifted));
  for (const bad of [[], [''], ['one',' '], ['same','same'], ['a','b','c','d']]) {
    const broken = structuredClone(points); broken[0].points = bad;
    assert.throws(() => core.attachKeyPoints(slides, broken));
  }
});
