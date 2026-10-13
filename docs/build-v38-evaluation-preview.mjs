// Rebuild v38 documents and images; presenter publishing is configured separately.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-13-v37-slides-01-56-no-numbers';
const added='images/candidates/2026-10-13-evaluation-intro-preview';
const dest='images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro';
const story='storyboard/58-slide-storyboard-v38-evaluation-intro.md';
const read=p=>fs.readFileSync(path.join(root,p));
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.trimEnd()+'\n');
const sha=b=>createHash('sha256').update(b).digest('hex');
fs.mkdirSync(path.join(root,dest),{recursive:true});
const source=JSON.parse(read(base+'/manifest.json'));
assert.equal(source.count,56);
const updates={
  20:{transition:'既然有回答不代表流程正確完成，那我們要怎麼知道Agent真的完成了任務？'},
  21:{message:'先說清楚怎樣才算完成，讓任務有可對照的成功標準。',notes:'要知道Agent有沒有完成，第一步是先說清楚：這個任務做到什麼才算完成。以剛才的報告任務為例，我要求兩件事：必要操作是確實呼叫Builder；交付成果則是交出Builder產生的正式報告。只呼叫工具卻沒有交出報告，不算完成；自己寫一份摘要卻跳過Builder，也不符合要求。這張驗收卡是在定義要求，不是在宣告測試已通過，也不是再次驗證Builder底層程式是否正確。',points:['必要操作：確實呼叫Builder。','交付成果：交出Builder產生的正式報告。','先定義成功標準，才有依據判斷是否完成。'],transition:'有了明確標準，接著讓模型實際跑一次，再檢查有沒有做到。這就是Evaluation。'},
  22:{notes:'剛才用白話檢查兩件事：報告有交出嗎、Builder有呼叫嗎。現在才介紹它們的名稱。Outcome Evaluation，也就是結果評估，看最後的交付是否符合要求；Trajectory Evaluation，也就是執行軌跡評估，看實際發生的工具操作、順序與參數。這不是讀取模型內心的推理，而是檢查可觀察的訊息與操作。兩者是評估對象，可以一起看，不是兩種只能選一個的測試。'},
  23:{transition:'現在知道要檢查什麼，也知道怎麼判斷。回到同一份報告，把這些名稱與方法對到實際檢查項目。'},
  24:{message:'把報告案例對應到評估對象與檢查方法，建立後續重跑的共同檢查項目。',notes:'這次不再重講Evaluation是什麼，而是把剛才的兩個問題變成實際檢查項目。指定的Builder報告有沒有被交付，是Outcome；build_execution_summary有沒有真的被呼叫，是Trajectory。這些有明確依據的條件，可以用程式對照輸出來源和工具紀錄，不必每項都請另一個LLM評分。Builder是指定交付工具；這裡不是再請模型判定Builder底層程式是否正確。這樣我們得到一組可以重複使用的檢查，下一步就能比較多次執行是否穩定。',points:['指定報告交付對應Outcome；必要Builder呼叫對應Trajectory。','對明確條件使用程式檢查，建立重跑時一致的驗收項目。'],transition:'檢查項目固定後，一次通過還不夠；下一步要看同樣條件下多跑幾次是否穩定。'}
};
const newEntries=[{
  title:'Evaluation：實際測試 LLM 的表現',
  sourceFile:added+'/evaluation-01-v2.png',
  '核心訊息':'Evaluation的目的，是實際測試LLM在任務中的表現，而不是只相信它的回答或能力描述。',
  '搭配講稿':'剛才已經說清楚怎樣才算完成，現在要實際測試它做不做得到。這就是Evaluation：準備任務與成功標準，讓LLM實際執行，再對照結果是否達標。在Agent情境中，實際執行也包含工具操作，所以除了最後答案，還能檢查它有沒有完成要求的步驟。不是只問模型自己覺得做得好不好，而是看它實際做了什麼。測試可以在受控環境進行，不一定要直接操作正式系統。不是猜它會不會，而是實際測它做得如何。',
  '接下一頁':'沿用剛才報告任務的驗收卡，跑完一次後，我們要到哪裡找達標的依據？',
  points:['用真實執行產生的結果對照任務要求，不只看回答是否流暢。','測試可以在受控環境進行；不等於直接操作正式系統。']
},{
  title:'用報告任務，實際測一次',
  sourceFile:added+'/evaluation-02.png',
  '核心訊息':'用既有報告任務示範事前要求與事後檢查，先建立直覺，再介紹術語。',
  '搭配講稿':'沿用剛才報告任務的驗收卡，讓Agent真的跑一次。現在聚焦在跑完後如何找依據：從交付成果確認是不是指定Builder產生的正式報告，從操作紀錄確認Builder有沒有實際被呼叫。不能只問模型有沒有完成，就把它的回答當成通過。圖上的問題是檢查清單，不代表這次已經全部通過。下一頁再把這兩個檢查對象介紹成正式的評估名稱。',
  '接下一頁':'報告與工具操作，是兩個不同的檢查對象。它們分別叫結果評估與執行軌跡評估。',
  points:['從實際交付確認指定報告；從操作紀錄確認Builder呼叫。','用執行產生的依據驗收，不採信模型自行宣告。']
}].map(e=>({...e,chapter:'Skill 與 Evaluation：說明如何變成測試',embeddedPageNumber:null,status:'pending_user_review'}));
const entries=[];
for(const old of source.entries){
  const e={...old,previousV37:old.n,sourceFile:base+'/'+old.file};
  if(old.n===21){
    e.sourceFile=added+'/slide-21-criteria-v6.png';
    e.imageEdited=true;
    delete e.editBounds;
    delete e.outsideRepairRegionChangedPixels;
    e.sourceProvenance=base+'/'+old.file;
    e.sourceSha256=old.sha256;
  }
  const u=updates[old.n];
  if(u){
    if(u.message)e['核心訊息']=u.message;
    if(u.notes)e['搭配講稿']=u.notes;
    if(u.points)e.points=u.points;
    if(u.transition)e['接下一頁']=u.transition;
  }
  entries.push(e);
  if(old.n===21)entries.push(newEntries[0],newEntries[1]);
}
assert.equal(entries.length,58);
for(const [i,e] of entries.entries()){
  const bytes=read(e.sourceFile);
  e.n=i+1;e.file=`slide-${String(e.n).padStart(2,'0')}.png`;
  e.sha256=sha(bytes);
  e.pixelSize={width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  assert.equal(sha(read(dest+'/'+e.file)),e.sha256);
  if(e.previousV37&&!e.imageEdited)assert.equal(e.sha256,source.entries[e.previousV37-1].sha256);
}
assert.deepEqual(entries.filter(e=>e.previousV37).map(e=>e.previousV37),Array.from({length:56},(_,i)=>i+1));
assert.deepEqual(entries.filter(e=>!e.previousV37).map(e=>e.n),[22,23]);
assert.equal(entries[20].previousV37,21);
const notice='58頁整合版：保留v37的56頁相對順序，新增第22、23頁Evaluation介紹。本輪只重畫第21頁，其餘57張v38圖片不變。第20頁提出有回答不代表完成，第21頁定義完成標準，第22頁介紹Evaluation測試流程，第23頁示範如何從交付成果與操作紀錄找驗收依據。附近講稿與轉場同步更新；圖內不加頁碼。此版供投影站台使用，歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 58頁分頁稿 v38｜Evaluation入門\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 58頁圖片與講稿 v38\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# 頁碼與段落分工\n\n20：有回答不代表流程完成。21（原21）：定義完成標準，用任務驗收卡列出必要操作與交付成果。22（新增）：介紹Evaluation實際測試流程。23（新增）：沿用驗收卡，從交付成果與操作紀錄找依據。24（原22）：介紹Outcome與Trajectory。25（原23）：介紹Code-based與Judge。26（原24）：把案例對應到評估對象與程式檢查。27（原25）：多次重跑。\n\n21只回答怎樣才算完成，不重畫22的三步流程。23不再次定義成功，而是指出實際要檢查哪裡。26再對應術語與檢查方法。\n\n| 新頁碼 | v37來源 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV37??'新增'} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>58頁 Evaluation介紹</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>58頁 Evaluation介紹</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v38',count:58,status:'pending_user_review',numberingNotice:notice,insertedPages:[22,23],entries},null,2));
const unchanged=entries.filter(e=>e.previousV37&&!e.imageEdited).length;
assert.equal(unchanged,55);
write(dest+'/verification.json',JSON.stringify({count:58,insertedPages:[22,23],revisedImagesThisRevision:[21],preservedV37Images:unchanged,allUnmodifiedOriginalHashesMatch:true,originalRelativeOrderPreserved:true,allFilesExist:true,presenterVerification:'docs/verification/2026-10-13-v38-evaluation-presenter-publish.md',pdfUpdated:false},null,2));
console.log(JSON.stringify({count:58,revisedImagesThisRevision:[21],preservedV37Images:unchanged,allUnmodifiedOriginalHashesMatch:true,dest,story},null,2));
