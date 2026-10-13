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
const sourceOrder=[...Array.from({length:44},(_,i)=>i+1),46,47,45,...Array.from({length:11},(_,i)=>i+48)];
assert.equal(new Set(sourceOrder).size,58);
for(const old of sourceOrder.map(n=>source.entries[n-1])){
  const e={...old,previousV39:old.n,sourceFile:base+'/'+old.file};
  if(old.n===37){
    e['搭配講稿']='Approval會把一次Agent Run切成提案與執行兩段，中間可能隔幾分鐘或幾小時。資料可能已被別人處理，任務可能已關閉，帳務或權限狀態也可能改變。因此批准不是永久通行證。Runtime在真正執行前仍要重新檢查Precondition，並留下批准內容與檢查結果。這裡確認的是這次操作現在能不能執行，接下來還要看整個任務能不能正確完成。';
    e['接下一頁']='重新檢查通過，這次操作就可以繼續。但可以執行，是否代表整個任務一定能正確完成？';
  }
  if(old.n===38){
    e['搭配講稿']='上一頁區分了可以執行與正確完成。現在若發現結果不符合要求，除了處理當下情況，也要能回看當時如何接收任務、模型回了什麼、工具怎麼執行，最後交付了什麼。圖中由結果往回看的箭頭，是對照當時留下的執行紀錄，不是重新跑一次就當成重現，也不是已經知道哪一步出了錯。接著回到前面漏Builder的案例，示範如何用紀錄找出需要追查的環節。';
  }
  if(old.n===42){
    e.sourceFile=added+'/slide-43-no-footer.png';
    e.imageEdited=true;
    e.sourceProvenance=base+'/'+old.file;
    e.sourceSha256=old.sha256;
    delete e.editBounds;
    delete e.outsideRepairRegionChangedPixels;
  }
  if(old.n===44)e['接下一頁']='先回到漏Builder的問題：這版Skill修改後，必要的Builder有沒有真的被呼叫？';
  if(old.n===45){
    e.title='輸出報告，格式與內容也要符合要求';
    e.sourceFile=added+'/report-format-title.png';
    e.imageEdited=true;
    e.sourceProvenance=base+'/'+old.file;
    e.sourceSha256=old.sha256;
    delete e.editBounds;
    delete e.outsideRepairRegionChangedPixels;
    e['核心訊息']='在核對Builder呼叫與傳入資料後，驗收實際交付的報告是否符合既定格式與內容要求。';
    e['搭配講稿']='前面核對Builder有沒有呼叫，以及傳入的Ref和參數是否正確。接著驗收使用者實際拿到的報告：固定格式、完整分類與必要warning有沒有交出來；結論是否有工具結果支持。呼叫與傳入資料符合要求，還要把最後交付對回這次工具回傳的報告或引用，並用既定交付標準核對。不能因為新版看起來比較順，就說修改有效，也不能為了讓它通過而放寬標準。這是對正式交付的測試，不是請LLM重新判定Builder底層程式的正確性。';
    e['接下一頁']='Builder呼叫、傳入資料與報告交付這些驗收項目，該用哪種方法判斷？接著對應程式檢查與Judge。';
  }
  if(old.n===47)e['接下一頁']='Builder有呼叫，傳入資料也核對完，接著看實際交付的報告，格式與內容是否符合原本要求。';
  entries.push(e);
  if(old.n===37)entries.push({...bridge});
}
assert.equal(entries.length,59);
assert.deepEqual(entries.filter(e=>e.previousV39).map(e=>e.previousV39),sourceOrder);
for(const [i,e] of entries.entries()){
  const bytes=read(e.sourceFile);
  e.n=i+1;e.file=`slide-${String(e.n).padStart(2,'0')}.png`;
  e.sha256=hash(bytes);
  e.pixelSize={width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
  if(e.previousV39&&![42,45].includes(e.previousV39))assert.equal(e.sha256,source.entries[e.previousV39-1].sha256);
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  assert.equal(hash(read(dest+'/'+e.file)),e.sha256);
}
assert.equal(entries[36].previousV39,37);
assert.equal(entries[37].title,bridge.title);
assert.equal(entries[38].previousV39,38);
assert.deepEqual(entries.slice(45,48).map(e=>e.previousV39),[46,47,45]);
const notice='v40共59頁：原37與38頁之間新增執行與完成的轉場；原42頁（現43頁）移除底部說明。報告驗收頁由原58頁版45頁／上一版59頁版46頁，移到Builder呼叫與資料檢查後，成為現48頁，標題改為「輸出報告，格式與內容也要符合要求」。現46～48頁依序為Builder呼叫、傳入資料、報告驗收，45與47～48轉場同步。其餘56張v39原圖逐位元保留，本輪僅重畫報告頁標題；圖片無內嵌頁碼，歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 59頁分頁稿 v40｜執行與完成的轉場\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 59頁圖片與講稿 v40\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md) · [產圖提示](PROMPTS.json)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# v39至v40頁碼對照\n\n37：批准後重新檢查條件。38（新增）：可以執行不代表任務正確完成。39（原38）：出錯後回看執行。40（原39）：漏Builder案例。41、42（原40、41）：留下資訊並對照紀錄。\n\n報告驗收由原45頁移至原47頁之後。現行46：Builder呼叫；47：傳入資料；48：輸出報告格式與內容。59頁總數不變。\n\n| v40 | v39 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV39??'新增'} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>59頁執行轉場</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>59頁執行轉場</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v40',count:59,status:'pending_user_review',numberingNotice:notice,insertedPages:[38],entries},null,2));
write(dest+'/PROMPTS.json',JSON.stringify({tool:'built-in image_gen',bridge:JSON.parse(read(added+'/PROMPT.json')),slide43:JSON.parse(read(added+'/SLIDE-43-REMOVE-FOOTER-PROMPT.json')),slide48:JSON.parse(read(added+'/REPORT-FORMAT-TITLE-PROMPT.json'))},null,2));
write(dest+'/verification.json',JSON.stringify({count:59,insertedPages:[38],revisedOriginalImages:[43,48],preservedV39Images:56,allUnmodifiedOriginalHashesMatch:true,originalRelativeOrderPreserved:false,originalSourceOrder:sourceOrder,reorderedV39Pages:[45,46,47],revisedNarration:[37,38,39,45,47,48],pdfUpdated:false,verification:'docs/verification/2026-10-13-v40-report-reordered.md'},null,2));
console.log(JSON.stringify({count:59,dest,story,preservedV39Images:56,insertedPage:38,reportAt:48,validationOrder:['Builder呼叫','傳入資料','報告驗收']}));
