import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as core from '../core.mjs';

const origin='http://127.0.0.1:8767';
const read=file=>fs.readFileSync(new URL('../'+file,import.meta.url),'utf8');
const moduleSource=file=>read(file).replace(/^import[^\n]+\n/,'');
function element(){return {textContent:'',disabled:false,style:{setProperty(){}},listeners:new Map(),addEventListener(type,fn){this.listeners.set(type,fn);},replaceChildren(){},replaceWith(){},scrollHeight:100,clientHeight:100};}

function speaker(){
  const elements=new Map(),listeners=new Map(),messages=[],timers=new Map();let timerID=0;
  const document={getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id);},documentElement:element(),addEventListener(){},querySelectorAll(){return [];}};
  const popup={closed:false,document:{fullscreenElement:null},focus(){},moveTo(){},resizeTo(){},postMessage:(message,options)=>messages.push({message,options}),enterProjectionFullscreen(){},close(){this.closed=true;}};
  const window={open:()=>popup,matchMedia:()=>({matches:false}),addEventListener:(type,fn)=>listeners.set(type,fn)};
  // Only skip the independent fetch/bootstrap; execute the real event handlers.
  const source=moduleSource('presenter.mjs').split('\ntry {\n  const response = await fetch')[0];
  const context=vm.createContext({...core,window,document,location:{origin},crypto:{randomUUID:()=> 'test'},localStorage:{getItem(){return null;},setItem(){}},ResizeObserver:class{observe(){}},setInterval:()=>1,clearInterval(){},setTimeout(fn){timers.set(++timerID,fn);return timerID;},clearTimeout(id){timers.delete(id);}});
  vm.runInContext(source+'\nslides=[{src:"/slides/test.png",title:"Test"}];',context);
  return {popup,messages,elements,timers,timeout(){for(const [id,fn] of timers){timers.delete(id);fn();}},click:id=>elements.get(id).listeners.get('click')(),message(data,overrides={}){listeners.get('message')({source:popup,origin,data:{session:'test',...data},...overrides});}};
}

function audience({standalone=false,reject=false}={}){
  const elements=new Map(['projection-hint','projected-slide','enter-fullscreen'].map(id=>[id,element()]));
  const listeners=new Map(),events=new Map(),reports=[];let calls=0;
  const parent={postMessage:message=>reports.push(message)};
  const document={getElementById:id=>elements.get(id),fullscreenElement:null,addEventListener:(type,fn)=>events.set(type,fn),documentElement:{requestFullscreen(){calls++;return reject?Promise.reject(new Error('denied')):Promise.resolve();}}};
  const window={opener:standalone?null:parent,addEventListener:(type,fn)=>listeners.set(type,fn)};
  vm.runInNewContext(moduleSource('projection.mjs'),{...core,window,document,location:{origin,search:standalone?'':'?session=test'},URLSearchParams,Image:class{}});
  return {document,reports,elements,events,get calls(){return calls;},message(data,overrides={}){listeners.get('message')({source:parent,origin,data:{session:'test',...data},...overrides});}};
}

test('speaker click delegates only fullscreen to the authenticated projection',()=>{
  const p=speaker();p.click('open-projection');p.message({type:'ready'});
  assert.equal(p.messages.filter(m=>m.message.type==='enter-fullscreen').length,0,'opening does not automatically enter fullscreen');
  p.click('projection-fullscreen');
  const command=p.messages.at(-1);
  assert.deepEqual(JSON.parse(JSON.stringify(command)),{message:{type:'enter-fullscreen',session:'test'},options:{targetOrigin:origin,delegate:'fullscreen'}});
});
test('not-ready and closed projection receive no fullscreen command',()=>{
  const p=speaker();p.click('projection-fullscreen');p.click('open-projection');p.click('projection-fullscreen');
  assert.equal(p.messages.length,0);
  p.message({type:'ready'});const count=p.messages.length;p.popup.closed=true;p.click('projection-fullscreen');assert.equal(p.messages.length,count);
});
test('delegation failure is reported on the speaker control panel',()=>{
  const p=speaker();p.click('open-projection');p.message({type:'ready'});
  p.elements.get('setup-hint').textContent='';
  p.popup.postMessage=()=>{throw new Error('unsupported delegation');};
  p.click('projection-fullscreen');assert.match(p.elements.get('setup-hint').textContent,/L/);
});
test('missing fullscreen acknowledgement gives a bounded fallback instead of claiming success',()=>{
  const p=speaker();p.click('open-projection');p.message({type:'ready'});p.click('projection-fullscreen');
  assert.match(p.elements.get('setup-hint').textContent,/正在/);
  p.timeout();assert.match(p.elements.get('setup-hint').textContent,/未收到.*L/);
});
test('actual fullscreen acknowledgement cancels fallback; closing cancels pending feedback',()=>{
  const p=speaker();p.click('open-projection');p.message({type:'ready'});p.click('projection-fullscreen');
  assert.equal(p.timers.size,1);p.message({type:'fullscreen',active:true});assert.equal(p.timers.size,0);
  assert.match(p.elements.get('setup-hint').textContent,/已進入/);
  p.message({type:'fullscreen',active:false});assert.equal(p.messages.filter(m=>m.message.type==='enter-fullscreen').length,1);
  p.click('projection-fullscreen');p.click('close-projection');assert.equal(p.timers.size,0);
});
test('authenticated fullscreen command invokes the projection API immediately',()=>{
  const p=audience();p.message({type:'enter-fullscreen'});assert.equal(p.calls,1);
});
test('clicking fullscreen when already fullscreen acknowledges the actual state',()=>{
  const p=audience();p.document.fullscreenElement={};p.message({type:'enter-fullscreen'});
  assert.equal(p.calls,0);assert.equal(p.reports.at(-1).type,'fullscreen');assert.equal(p.reports.at(-1).active,true);
});
test('foreign origin, window, session and non-command messages cannot enter fullscreen',()=>{
  const p=audience();
  p.message({type:'enter-fullscreen'},{origin:'https://other.example'});
  p.message({type:'enter-fullscreen'},{source:{}});
  p.message({type:'enter-fullscreen',session:'wrong'});
  p.message({type:'ready'});p.message({type:'fullscreen',active:false});
  assert.equal(p.calls,0);
});
test('fullscreen rejection reports failure, not success',async()=>{
  const p=audience({reject:true});p.message({type:'enter-fullscreen'});await new Promise(setImmediate);
  assert.equal(p.reports.at(-1).type,'fullscreen-error');assert.match(p.elements.get('projection-hint').textContent,/L/);
});
test('exit is reported without requesting fullscreen again',()=>{
  const p=audience();p.events.get('fullscreenchange')();
  assert.equal(p.calls,0);assert.equal(p.reports.at(-1).active,false);
});
test('audience has no fullscreen button and standalone still gives a useful hint',()=>{
  assert.doesNotMatch(read('projection.html'),/<button\b/);
  const p=audience({standalone:true});assert.match(p.elements.get('projection-hint').textContent,/講者控制台/);assert.equal(p.calls,0);
});
