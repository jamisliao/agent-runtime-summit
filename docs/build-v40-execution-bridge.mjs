import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-13-v39-slides-01-58-evaluation-titles';
const added='images/candidates/2026-10-13-v40-execution-bridge-preview';
const dest='images/candidates/2026-10-13-v40-slides-01-59-execution-bridge';
const story='storyboard/59-slide-storyboard-v40-execution-bridge.md';
const read=p=>fs.readFileSync(path.join(root,p));
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.trimEnd()+'\n');
const hash=b=>createHash('sha256').update(b).digest('hex');
const source=JSON.parse(read(base+'/manifest.json'));
assert.equal(source.count,58);
fs.mkdirSync(path.join(root,dest),{recursive:true});

const bridge={
  title:'可以執行，不代表能正確完成任務',
  chapter:'從防錯，轉向出錯後的追查',
  sourceFile:added+'/execution-bridge.png',
  embeddedPageNumber:null,
  status:'pending_user_review',
  '核心訊息':'批准與條件檢查確認操作現在是否可以執行；任務是否正確完成，還要看後續實際執行與交付結果。',
  '搭配講稿':'上一頁重新檢查的是：這次操作現在是否符合執行條件。批准與檢查通過，代表可以往下執行，但不等於整個任務已經正確完成。後面仍可能漏掉要求的步驟、工具執行失敗，或交付結果不符合要求。圖中是可能發生的問題，不是一組新增實測。除了執行前檢查，我們也要知道實際執行發生了什麼。若最後發現問題，就需要回看當時的過程，接著談這件事。',
  '接下一頁':'如果任務真的出了問題，我們要怎麼回看當時的執行、找到需要追查的環節？',
  points:['批准與條件檢查通過，確認的是操作可以執行。','任務是否正確完成，還要看實際步驟、工具執行與交付結果。']
};
const entries=[];
for(const old of source.entries){
  const e={...old,previousV39:old.n,sourceFile:base+'/'+old.file};
  if(old.n===37){
    e['搭配講稿']='Approval會把一次Agent Run切成提案與執行兩段，中間可能隔幾分鐘或幾小時。資料可能已被別人處理，任務可能已關閉，帳務或權限狀態也可能改變。因此批准不是永久通行證。Runtime在真正執行前仍要重新檢查Precondition，並留下批准內容與檢查結果。這裡確認的是這次操作現在能不能執行，接下來還要看整個任務能不能正確完成。';
    e['接下一頁']='重新檢查通過，這次操作就可以繼續。但可以執行，是否代表整個任務一定能正確完成？';
  }
  if(old.n===38){
    e['搭配講稿']='上一頁區分了可以執行與正確完成。現在若發現結果不符合要求，除了處理當下情況，也要能回看當時如何接收任務、模型回了什麼、工具怎麼執行，最後交付了什麼。圖中由結果往回看的箭頭，是對照當時留下的執行紀錄，不是重新跑一次就當成重現，也不是已經知道哪一步出了錯。接著回到前面漏Builder的案例，示範如何用紀錄找出需要追查的環節。';
  }
  entries.push(e);
  if(old.n===37)entries.push({...bridge});
}
assert.equal(entries.length,59);
assert.deepEqual(entries.filter(e=>e.previousV39).map(e=>e.previousV39),source.entries.map(e=>e.n));
for(const [i,e] of entries.entries()){
  const bytes=read(e.sourceFile);
  e.n=i+1;e.file=`slide-${String(e.n).padStart(2,'0')}.png`;
  e.sha256=hash(bytes);
  e.pixelSize={width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
  if(e.previousV39)assert.equal(e.sha256,source.entries[e.previousV39-1].sha256);
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  assert.equal(hash(read(dest+'/'+e.file)),e.sha256);
}
assert.equal(entries[36].previousV39,37);
assert.equal(entries[37].title,bridge.title);
assert.equal(entries[38].previousV39,38);
const notice='v40共59頁：在原37與38頁之間新增「可以執行，不代表能正確完成任務」，補上執行條件與任務完成的差別，再接出錯後回看執行。原58張圖片全部逐位元保留，不採用原37頁的補字比較稿。原38～58頁順延為39～59；37與新39頁講稿轉場同步，其他原頁內容保留。圖片無內嵌頁碼；歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 59頁分頁稿 v40｜執行與完成的轉場\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 59頁圖片與講稿 v40\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md) · [產圖提示](PROMPTS.json)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# v39至v40頁碼對照\n\n37：批准後重新檢查條件。38（新增）：可以執行不代表任務正確完成。39（原38）：出錯後回看執行。40（原39）：漏Builder案例。41、42（原40、41）：留下資訊並對照紀錄。\n\n| v40 | v39 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV39??'新增'} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>59頁執行轉場</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>59頁執行轉場</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v40',count:59,status:'pending_user_review',numberingNotice:notice,insertedPages:[38],entries},null,2));
write(dest+'/PROMPTS.json',read(added+'/PROMPT.json').toString());
write(dest+'/verification.json',JSON.stringify({count:59,insertedPages:[38],preservedV39Images:58,allOriginalHashesMatch:true,originalRelativeOrderPreserved:true,revisedNarration:[37,38,39],pdfUpdated:false,verification:'docs/verification/2026-10-13-v40-execution-bridge.md'},null,2));
console.log(JSON.stringify({count:59,dest,story,preservedV39Images:58,insertedPage:38}));
