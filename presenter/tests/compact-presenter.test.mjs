import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../styles.css',import.meta.url),'utf8');
const js=fs.readFileSync(new URL('../presenter.mjs',import.meta.url),'utf8');

test('speaker panel contains only message, points and transition, not duplicate title or full script',()=>{
  assert.doesNotMatch(html,/id="(?:slide-title|speaker-notes|notes-source)"/);
  for(const id of ['slide-message','slide-key-points','transition'])assert.ok(html.includes(`id="${id}"`));
  assert.doesNotMatch(js,/byId\('(?:slide-title|speaker-notes|notes-source)'\)/);
});
test('overview is an explicit dialog instead of a section below the workspace',()=>{
  assert.match(html,/<dialog[^>]*id="overview-dialog"/);
  assert.match(html,/id="open-overview"/);
  assert.match(js,/showModal\(\)/);
});
test('desktop uses remaining viewport height with two constrained image rows',()=>{
  assert.match(css,/height:\s*100dvh/);
  assert.match(css,/grid-template-rows:[^;]*1\.85fr[^;]*1fr/);
  assert.match(css,/\.notes[^}]*overflow:\s*visible/);
  assert.match(js,/ResizeObserver/);
});
test('all 58 cues are short, ordered, and omit editor-facing commentary',()=>{
  const file=new URL('../../docs/speaker-cues-v41.json',import.meta.url);
  assert.ok(fs.existsSync(file),'curated cue source missing');
  const cues=JSON.parse(fs.readFileSync(file));
  assert.equal(cues.length,58);
  for(const [i,c]of cues.entries()){
    assert.equal(c.n,i+1);
    assert.ok(c.message.length<=65,`message ${c.n}`);
    assert.ok(c.points.length>=2&&c.points.length<=3);
    assert.ok(c.points.every(p=>p.length<=65),`point ${c.n}`);
    assert.ok(c.transition.length<=75,`transition ${c.n}`);
    assert.doesNotMatch(c.message+c.points.join(''),/這頁專講|下一頁立刻|不再重講|與下一頁.*分工|不重複前段/);
  }
  assert.equal(cues[49].title,'通過幾次，才接受這版修改？');
  assert.equal(cues[50].title,'踩過的坑，留進回歸測試');
});
