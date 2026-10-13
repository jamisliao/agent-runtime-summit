// Rebuild v38 documents and images; presenter publishing is configured separately.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-13-v37-slides-01-56-no-numbers';
const added='images/candidates/2026-10-13-evaluation-intro-preview';
const revised='images/candidates/2026-10-13-v38-pages-23-26-evaluation-preview';
const dest='images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro';
const story='storyboard/58-slide-storyboard-v38-evaluation-intro.md';
const read=p=>fs.readFileSync(path.join(root,p));
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.trimEnd()+'\n');
const sha=b=>createHash('sha256').update(b).digest('hex');
fs.mkdirSync(path.join(root,dest),{recursive:true});
const source=JSON.parse(read(base+'/manifest.json'));
assert.equal(source.count,56);
const updates={
  7:{message:'從每輪累積工具結果，帶出下一步究竟需要哪些資訊，以及完整資料與模型Context應分開處理。',notes:'第一版的做法很直覺：工具回什麼，我就整包append進Context。一輪看起來沒問題，幾輪之後，舊結果還在，新結果又加進來，Context就越堆越多。但這時我回頭問：下一步，模型真的需要重新讀完這些資料嗎？有時它只需要知道工具成功了，再決定把資料交給哪個工具；完整內容是下一個工具要用的，不一定是模型要讀的。即使需要模型分析，也應先判斷這次任務需要哪些內容。所以接下來要分開兩件事：完整資料怎麼保留，以及這一輪模型需要看到什麼。',points:['每輪整包append，使舊結果、新結果持續累積。','先問下一步由誰使用資料：模型分析，或另一個工具處理？','工具需要保留完整資料，不等於這一輪模型需要讀完整包。'],transition:'完整資料仍要保留，但不用全放進模型的Context。下一頁看我怎麼把資料保存與本輪輸入分開。'},
  8:{notes:'既然下一個工具可能還要用完整資料，我不能只為了縮小Context，就把原始結果丟掉。我把工具回傳的完整結果留在Runtime；再依模型這一輪要做什麼，準備它需要看到的內容。資料不是一開始就在資料庫裡，是工具回傳後，由Runtime刻意保存下來的。如果下一步只是交給另一個工具處理，模型可以只拿狀態與取件參照；如果要模型分析，就給它相關內容。這樣完整資料仍可取用，Context也不必跟著所有原始結果一路累積。'},
  13:{title:'資訊放在中間，也容易被 LLM 忽略'},
  20:{transition:'既然有回答不代表流程正確完成，那我們要怎麼知道Agent真的完成了任務？'},
  21:{message:'先說清楚怎樣才算完成，讓任務有可對照的成功標準。',notes:'要知道Agent有沒有完成，第一步是先說清楚：這個任務做到什麼才算完成。以剛才的報告任務為例，我要求兩件事：必要操作是確實呼叫Builder；交付成果則是交出Builder產生的正式報告。只呼叫工具卻沒有交出報告，不算完成；自己寫一份摘要卻跳過Builder，也不符合要求。這張驗收卡是在定義要求，不是在宣告測試已通過，也不是再次驗證Builder底層程式是否正確。',points:['必要操作：確實呼叫Builder。','交付成果：交出Builder產生的正式報告。','先定義成功標準，才有依據判斷是否完成。'],transition:'有了明確標準，接著讓模型實際跑一次，再檢查有沒有做到。這就是Evaluation。'},
  22:{notes:'上一頁我們找了兩類依據：交付成果，以及工具呼叫與回傳紀錄。現在介紹要評估的對象。Outcome Evaluation，也就是結果評估，看最後的交付是否符合任務要求；若要求交付Builder產生的報告，確認來源時也需要對照工具回傳結果。Trajectory Evaluation，也就是執行軌跡評估，看實際發生的工具操作、順序與參數，例如Builder有沒有真的被呼叫。這些名稱指的是評估什麼，不是限定只能使用哪一份紀錄；同一份工具紀錄也可以支援結果來源的檢查。兩者可以一起評估。'},
  23:{transition:'回到Builder案例，呼叫有沒有發生、交付是否對應它的回傳結果，都是可以明確核對的條件。接著把它們做成程式檢查。'},
  24:{title:'把明確要求，做成程式檢查',message:'讓程式核對實際Builder呼叫，以及最後交付是否對應Builder的Tool回傳結果。',notes:'這個案例有兩項明確條件，可以交給程式核對。第一，從實際工具呼叫紀錄確認build_execution_summary有被呼叫。第二，把最後交付與這次Builder回傳的報告或引用對照，確認交付對應的是它的結果。報告的外觀不能證明來源；只有呼叫成功，也不能證明最後交付用了它的輸出。這個檢查需要保留Tool回傳結果及可核對的交付資料，並依報告的交付形式實作對照。這裡是在測試執行後判斷有沒有達標，沒有再驗證Builder底層分析內容是否正確。每次都用同一套標準，才有辦法比較後續多次測試。',points:['程式核對實際呼叫紀錄中是否包含指定Builder。','對照最後交付與Builder的Tool回傳結果，確認交付是否符合來源要求。','每次執行後使用相同標準，記錄各項通過或未通過。'],transition:'程式檢查訂好之後，下一步是固定條件重跑，看同樣的任務是否穩定達標。'}
};
const newEntries=[{
  title:'Evaluation：實際測試 LLM 的表現',
  sourceFile:added+'/evaluation-01-v2.png',
  '核心訊息':'Evaluation的目的，是實際測試LLM在任務中的表現，而不是只相信它的回答或能力描述。',
  '搭配講稿':'剛才已經說清楚怎樣才算完成，現在要實際測試它做不做得到。這就是Evaluation：準備任務與成功標準，讓LLM實際執行，再對照結果是否達標。在Agent情境中，實際執行也包含工具操作，所以除了最後答案，還能檢查它有沒有完成要求的步驟。不是只問模型自己覺得做得好不好，而是看它實際做了什麼。測試可以在受控環境進行，不一定要直接操作正式系統。不是猜它會不會，而是實際測它做得如何。',
  '接下一頁':'沿用剛才報告任務的驗收卡，跑完一次後，我們要到哪裡找達標的依據？',
  points:['用真實執行產生的結果對照任務要求，不只看回答是否流暢。','測試可以在受控環境進行；不等於直接操作正式系統。']
},{
  title:'測試跑完，怎麼確認達標？',
  sourceFile:revised+'/slide-23-v3.png',
  '核心訊息':'從交付成果確認是否交付，從工具呼叫與回傳紀錄確認Builder操作及交付來源。',
  '搭配講稿':'測試跑完，我要找實際執行留下的依據。先看指定報告有沒有交付，這只能確認成果是否存在，不能憑報告外觀判斷它是Builder產生的。接著查看工具呼叫紀錄，確認Builder有沒有被呼叫、回傳了什麼，再把這個Tool結果與最後交付的報告或引用對照。只有呼叫過Builder，也不代表模型最後交付了它的輸出。這樣才有依據確認任務是否達標。圖上的問題是待核對的項目，不代表一組新增的實測結果。',
  '接下一頁':'依據找到了，接著把要評估的對象分清楚：最後交付的結果，以及實際執行的步驟。',
  points:['交付成果：確認指定報告有沒有交出。','工具紀錄：確認Builder呼叫與Tool回傳結果。','確認交付來源，需要把Tool結果與最後交付對照。']
}].map(e=>({...e,chapter:'Skill 與 Evaluation：說明如何變成測試',embeddedPageNumber:null,status:'pending_user_review'}));
const entries=[];
for(const old of source.entries){
  const e={...old,previousV37:old.n,sourceFile:base+'/'+old.file};
  if(old.n===1||old.n===13||old.n===21||old.n===24){
    e.sourceFile=old.n===1?added+'/cover-JamisLiao-small.png':old.n===24?revised+'/slide-26-v2.png':added+(old.n===13?'/slide-13-title-v2.png':'/slide-21-criteria-v6.png');
    e.imageEdited=true;
    delete e.editBounds;
    delete e.outsideRepairRegionChangedPixels;
    e.sourceProvenance=base+'/'+old.file;
    e.sourceSha256=old.sha256;
  }
  const u=updates[old.n];
  if(u){
    if(u.title)e.title=u.title;
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
const notice='58頁整合版：保留原相對順序及無頁碼圖片，維持58頁。封面底部為草寫英文署名JamisLiao。本輪補強第7至8頁講稿與轉場：先問下一步由誰使用資料，再區分完整結果保存與模型本輪輸入；58張圖片皆不變。第21頁定義完成標準，第22頁介紹Evaluation，第23頁找實際交付與工具紀錄的依據，第24頁介紹評估對象，第25頁介紹評估方法，第26頁做程式檢查，再接第27頁固定條件重跑。文件與站台同步；歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 58頁分頁稿 v38｜Evaluation入門\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 58頁圖片與講稿 v38\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# 頁碼與段落分工\n\n20：有回答不代表流程完成。21（原21）：定義完成標準，用任務驗收卡列出必要操作與交付成果。22（新增）：介紹Evaluation實際測試流程。23（新增）：確認指定報告有無交付，查Builder呼叫及Tool回傳結果，再對照最後交付。24（原22）：介紹Outcome與Trajectory。25（原23）：介紹Code-based與Judge。26（原24）：將Builder呼叫與Tool結果對照做成程式檢查。27（原25）：多次重跑。\n\n21只回答怎樣才算完成，不重畫22的三步流程。23指出實際依據：報告外觀不能證明來源，需對照工具回傳與最後交付。24介紹評估對象，25介紹方法，26展示如何將明確條件交給程式核對。\n\n| 新頁碼 | v37來源 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV37??'新增'} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>58頁 Evaluation介紹</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>58頁 Evaluation介紹</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v38',count:58,status:'pending_user_review',numberingNotice:notice,insertedPages:[22,23],entries},null,2));
const unchanged=entries.filter(e=>e.previousV37&&!e.imageEdited).length;
assert.equal(unchanged,52);
write(dest+'/verification.json',JSON.stringify({count:58,insertedPages:[22,23],revisedImagesThisRevision:[],revisedNarration:[7,8],preservedV37Images:unchanged,allUnmodifiedOriginalHashesMatch:true,originalRelativeOrderPreserved:true,allFilesExist:true,presenterVerification:'docs/verification/2026-10-13-v38-context-bridge.md',pdfUpdated:false},null,2));
console.log(JSON.stringify({count:58,revisedImagesThisRevision:[],revisedNarration:[7,8],preservedV37Images:unchanged,allUnmodifiedOriginalHashesMatch:true,dest,story},null,2));
