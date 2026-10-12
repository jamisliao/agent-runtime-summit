import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as core from '../core.mjs';

const repo = new URL('../../', import.meta.url);
const folder = 'images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/';
const manifest = JSON.parse(await readFile(new URL(folder + 'manifest.json', repo), 'utf8'));
const manuscript = await readFile(new URL('storyboard/55-slide-storyboard-v28-integrated.md', repo), 'utf8');

test('v28 55-page storyboard retains exact source notes, points and transitions', () => {
  const slides = core.attachKeyPoints(core.parseDeck(manuscript, manifest), manifest.entries);
  assert.equal(slides.length, 55);
  for (const [i, slide] of slides.entries()) {
    const entry = manifest.entries[i];
    assert.equal(slide.title, entry.title);
    assert.equal(slide.chapter, entry.chapter);
    assert.equal(slide.notes, entry['搭配講稿']);
    assert.equal(slide.transition, entry['接下一頁']);
    assert.equal(slide.message, entry['核心訊息']);
    assert.deepEqual(slide.points, entry.points);
  }
});
test('55-page parsing rejects missing pages and title mismatch', () => {
  assert.throws(() => core.parseDeck(manuscript.replace('## 20｜', '## Missing 20｜'), manifest), /slides/i);
  const broken = structuredClone(manifest); broken.entries[19].title = 'old title';
  assert.throws(() => core.parseDeck(manuscript, broken), /title/i);
});
test('55-page navigation clamps obsolete 60-page input and End', () => {
  assert.equal(core.pageIndexFromInput('60', 55), 54);
  assert.equal(core.navigationIndex(54, 55, {key: 'ArrowRight'}), 54);
  assert.equal(core.navigationIndex(20, 55, {key: 'End'}), 54);
});
test('projection accepts versioned image URLs but rejects mismatched pages and private paths', () => {
  assert.equal(typeof core.validProjectionSlide, 'function');
  const message = {type: 'slide', index: 54, count: 55, revision: 1, src: '/slides/slide-55.png?v=' + 'a'.repeat(64)};
  assert.equal(core.validProjectionSlide(message), true);
  for (const bad of [{index: 55}, {count: 0}, {revision: 1.5}, {src: '/slides/slide-54.png'}, {src: '/deck.json'}, {src: '/slides/slide-55.png?v=other'}, {src: '/slides/../deck.json'}]) {
    assert.equal(core.validProjectionSlide({...message, ...bad}), false);
  }
});
