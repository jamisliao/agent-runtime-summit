import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(dir,'../../..');
const m=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json')));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const pad=n=>String(n).padStart(2,'0');
assert.equal(m.entries.length,52);
assert.deepEqual(m.entries.map(e=>e.n),Array.from({length:52},(_,i)=>i+1));
assert.deepEqual(m.entries.flatMap(e=>e.oldPages).sort((a,b)=>a-b),Array.from({length:60},(_,i)=>i+1));
const plainFile=path.join(root,'storyboard/52-slide-storyboard-v17-integrated.md');
const plain=fs.readFileSync(plainFile,'utf8'),illustrated=fs.readFileSync(path.join(dir,'README.md'),'utf8'),gallery=fs.readFileSync(path.join(dir,'gallery.html'),'utf8');
assert.equal((illustrated.match(/!\[/g)||[]).length,52);assert.equal((plain.match(/!\[/g)||[]).length,0);
assert.equal((gallery.match(/<img /g)||[]).length,52);
let bytes=0;
for(const e of m.entries){
 assert.equal(e.file,`slide-${pad(e.n)}.png`);const p=path.join(dir,e.file),b=fs.readFileSync(p);bytes+=b.length;
 assert.equal(hash(p),e.sha256);assert.equal(b.subarray(1,4).toString(),'PNG');assert.equal(b.readUInt32BE(16),1672);assert.equal(b.readUInt32BE(20),941);assert(b.length<100*1024*1024);
 for(const text of [plain,illustrated]){assert(text.includes(`id="slide-${pad(e.n)}"`));for(const k of ['核心訊息','畫面文字','畫面設計','搭配講稿','接下一頁'])assert(text.includes(e[k]));}
 for(const text of [illustrated,gallery])assert(text.includes(e.file));
}
assert.equal(m.entries[7].title,'工具結果留完整，給模型的內容按需準備');
assert(plain.includes('工具回傳後，由Runtime刻意留下來的'));
assert.equal(m.entries.filter(e=>e.embeddedPageNumber!==e.n).length,43); // 第01頁新舊頁碼相同；44張沿用舊頁碼，43張實際不同。
const targets=new Set();
for(const file of [plainFile,path.join(dir,'README.md'),path.join(dir,'TEXT-READABILITY-REVIEW.md')]){
 const text=fs.readFileSync(file,'utf8');
 for(const match of text.matchAll(/!?\[[^\]]*\]\(([^)\n]+)\)/g)){
  const link=match[1];if(/^(https?:|mailto:)/.test(link))continue;
  const [resource,anchor]=link.split('#');const p=resource?path.resolve(path.dirname(file),resource):file;
  assert(p.startsWith(root+path.sep));assert(fs.existsSync(p),`Missing Markdown target ${link}`);
  if(anchor)assert(fs.readFileSync(p,'utf8').includes(`id="${anchor}"`),`Missing anchor ${link}`);
  targets.add(path.relative(root,p));
 }
}
for(const match of gallery.matchAll(/(?:href|src)="([^"]+)"/g)){const p=path.resolve(dir,match[1]);assert(fs.existsSync(p));targets.add(path.relative(root,p));}
if(process.argv.includes('--staged'))for(const p of [...targets,...m.entries.map(e=>path.relative(root,path.join(dir,e.file)))])execFileSync('git',['ls-files','--error-unmatch',p],{cwd:root,stdio:'pipe'});
const result={decision:'PASS_WITH_KNOWN_LIMITATIONS',scope:'52-page documents and image publication bundle; not typography/projection acceptance',pages:52,images:52,fullScripts:52,oldPageCoverage:60,totalImageBytes:bytes,allLocalLinksResolve:true,trackedLinkCheck:process.argv.includes('--staged'),legacyNumberedImages:44,differentEmbeddedPageNumbers:43,priorityTextPages:[6,12,16,29,33,51],page08Integrated:true,browserRender:'NOT_RUN',projection:'NOT_RUN',userApproval:'pending_user_review'};
fs.writeFileSync(path.join(dir,'verification.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
