import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as core from '../core.mjs';

// Execute the actual projection module with a minimal DOM boundary. Browser
// fullscreen permission itself is deliberately not claimed by these unit tests.
const source=fs.readFileSync(new URL('../projection.mjs',import.meta.url),'utf8').replace(/^import[^\n]+\n/,'');
function setup(){
  const listeners=new Map();let calls=0,prevented=0;
  const elements=new Map(['projection-hint','projected-slide','enter-fullscreen'].map(id=>[id,{textContent:'',addEventListener(){},replaceWith(){}}]));
  const document={fullscreenElement:null,getElementById:id=>elements.get(id),addEventListener:(type,fn)=>listeners.set(type,fn),documentElement:{requestFullscreen:async()=>{calls++;document.fullscreenElement={};}}};
  const window={opener:{postMessage(){}},addEventListener(){}};
  vm.runInNewContext(source,{...core,window,document,location:{search:'?session=test',origin:'http://127.0.0.1:8767'},URLSearchParams,Image:class{}});
  return {key(key,modifiers={}){listeners.get('keydown')({key,preventDefault(){prevented++;},...modifiers});},get calls(){return calls;},get prevented(){return prevented;}};
}
test('L and lowercase l enter fullscreen from the projection key handler',()=>{
  for(const key of ['l','L']){const p=setup();p.key(key);assert.equal(p.calls,1);assert.equal(p.prevented,1);}
});
test('F no longer enters fullscreen and Esc is left to the browser',()=>{
  for(const key of ['f','F','Escape']){const p=setup();p.key(key);assert.equal(p.calls,0);assert.equal(p.prevented,0);}
});
test('browser shortcuts using modifiers do not enter fullscreen',()=>{
  for(const modifier of ['ctrlKey','metaKey','altKey']){const p=setup();p.key('l',{[modifier]:true});assert.equal(p.calls,0);assert.equal(p.prevented,0);}
});
test('current UI and documentation advertise L, not F',()=>{
  for(const file of ['index.html','projection.html','presenter.mjs','projection.mjs','README.md']){
    const text=fs.readFileSync(new URL('../'+file,import.meta.url),'utf8');
    assert.doesNotMatch(text,/按\s*\*?\*?F\b|視窗F／/,'outdated shortcut in '+file);
  }
});
