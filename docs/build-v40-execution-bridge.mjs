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
  title:'除了防錯，也要能追查出錯原因',
  chapter:'從防錯，轉向出錯後的追查',
  sourceFile:added+'/investigation-transition.png',
  embeddedPageNumber:null,
  status:'pending_user_review',
  '核心訊息':'明確從執行前防錯換到出錯後追查：看見結果不符合要求，只知道出了問題；原因需要對照當時留下的執行紀錄。',
  '搭配講稿':'前面談的是怎麼防錯：需要時先讓人確認或批准，真正執行前再檢查條件。接下來換一個議題：如果實際執行後發現問題，我們怎麼查清楚它如何發生？左側是執行前的檢查與批准，右側是出錯後回看紀錄，兩者不是同一個判斷。看見結果錯了，只告訴我們出錯，不能直接確定原因在模型、Skill或工具。這裡的圖是方法示意，不是新增實測。我們需要執行當時留下的紀錄作為追查依據，不能事後只憑結果猜。接著說明怎麼回看當時的執行，再回到漏Builder的例子。',
  '接下一頁':'要追查怎麼發生，就先把最後發現的問題放回當時的執行過程。',
  points:['執行前防錯與出錯後追查，處理不同問題。','看見錯誤不等於知道原因；需要當時的執行紀錄來找線索。']
};
const entries=[];
const sourceOrder=[...Array.from({length:43},(_,i)=>i+1),51,44,46,47,45,48,49,50,...Array.from({length:7},(_,i)=>i+52)];
assert.equal(new Set(sourceOrder).size,58);
for(const old of sourceOrder.map(n=>source.entries[n-1])){
  const e={...old,previousV39:old.n,sourceFile:base+'/'+old.file};
  if(old.n===33)e['接下一頁']='剛才檢查的是Agent說了什麼、有沒有依據。接下來要確認的是：它準備做什麼，是不是我要的，以及我是否允許它執行。';
  if(old.n===34){
    e.title='Agent 要做什麼，有時需要人先確認';
    e.sourceFile=added+'/hitl-34-direct-title.png';
    e.imageEdited=true;e.sourceProvenance=base+'/'+old.file;e.sourceSha256=old.sha256;
    delete e.editBounds;delete e.outsideRepairRegionChangedPixels;
    e['核心訊息']='有證據的報告不等於任務理解符合使用者意圖，也不等於操作已獲批准；在需要的時機由人確認理解或批准操作。';
    e['搭配講稿']='前面檢查的是Agent說了什麼、有沒有依據。接下來換一個問題：它準備做什麼，是不是我要它做的，以及我是否允許這個操作？報告有依據，不能回答這兩個問題。Human-in-the-Loop是在需要的時機把人的確認放進執行流程：任務開始前，先呈現理解的目標與範圍，由使用者確認或修正；特定操作執行前，先呈現操作與影響，由人批准或拒絕。這是在介紹兩種確認時機，不是在報告交付後才補做確認，也不是讓人替無證據的結論蓋章。每個任務不一定需要兩種確認；依需求與風險選擇。';
    e['接下一頁']='先展開第一種確認：在任務開始前，確認Agent理解的目標與範圍是不是使用者要的。';
    e.points=['先確認它準備做什麼：理解的任務是否符合使用者意圖？','再區分是否允許操作：需要批准時，先由人決定再執行。'];
  }
  if(old.n===35){
    e.title='先確認目標與範圍，再開始任務';
    e['搭配講稿']='先看第一種：確認它理解的目標與範圍，再開始任務。'+old['搭配講稿'];
    e['接下一頁']='目標與範圍確認後，若接下來要寫入、扣款或對外通知，還需要另一種確認：先批准這次操作。';
  }
  if(old.n===36){
    e.title='寫入、扣款或通知前，先取得批准';
    e['搭配講稿']='另一種是批准操作：理解對了，也不代表可以直接寫入、扣款或通知。'+old['搭配講稿'];
  }
  if([35,36].includes(old.n)){
    e.sourceFile=added+`/hitl-${old.n}-direct-title.png`;
    e.imageEdited=true;e.sourceProvenance=base+'/'+old.file;e.sourceSha256=old.sha256;
    delete e.editBounds;delete e.outsideRepairRegionChangedPixels;
  }
  if(old.n===37){
    e['搭配講稿']='Approval會把一次Agent Run切成提案與執行兩段，中間可能隔幾分鐘或幾小時。資料可能已被別人處理，任務可能已關閉，帳務或權限狀態也可能改變。因此批准不是永久通行證。Runtime在真正執行前仍要重新檢查Precondition，並留下批准內容與檢查結果。到這裡談的是執行前的確認與防錯。接下來換到另一個議題：出了問題，我們如何回看當時的執行、追查原因。';
    e['接下一頁']='前面談的是怎麼防錯。接下來換一個問題：如果實際執行仍出了問題，我們要留下什麼，才能查清楚原因？';
  }
  if(old.n===38){
    e['搭配講稿']='上一頁從執行前防錯換到出錯後追查。現在若發現結果不符合要求，除了處理當下情況，也要能回看當時如何接收任務、模型回了什麼、工具怎麼執行，最後交付了什麼。圖中由結果往回看的箭頭，是對照當時留下的執行紀錄，不是重新跑一次就當成重現，也不是已經知道哪一步出了錯。接著回到前面漏Builder的案例，示範如何用紀錄找出需要追查的環節。';
  }
  if(old.n===42){
    e.sourceFile=added+'/slide-43-no-footer.png';
    e.imageEdited=true;
    e.sourceProvenance=base+'/'+old.file;
    e.sourceSha256=old.sha256;
    delete e.editBounds;
    delete e.outsideRepairRegionChangedPixels;
  }
  if(old.n===43)e['接下一頁']='提出修改後，不能只看原本的問題有沒有修好：修改Skill，也可能影響其他原本通過的情境。';
  if(old.n===51){
    e['搭配講稿']='修好一個問題，也可能弄壞其他情境。我曾為了修一個failure case修改Skill，原本失敗的情境過了，重跑其他情境卻發現原本會過的流程壞掉。圖中A修好、B退步是影響的示意，不是新增實測統計。Skill的說明會影響模型在整次任務中的判斷，不一定只影響我們想修改的那一步。因此接受修改不能只看原本的失敗是否修好。';
    e['接下一頁']='所以改完Skill，完整任務要重測，其他原本通過的情境也要重測。';
    e.points=['修好一個失敗，其他原本通過的情境可能退步。','驗收修改要看完整流程，也要重跑其他情境，避免修A壞B。'];
  }
  if(old.n===44){
    e.title='改完 Skill，完整流程與其他情境都要重測';
    e.sourceFile=added+'/full-workflow-regression.png';
    e['核心訊息']='驗收候選Skill，同時檢查完整任務的交付、步驟與工具參數，以及其他原本通過的情境是否退步。';
    e['搭配講稿']='上一頁的修A壞B，說明為什麼不能只重測原本那個錯。這裡要測兩個範圍：第一是完整任務，核對交付結果、必要執行步驟與工具參數；第二是其他原本通過的情境，確認修改沒有造成退步。左側三張卡是同一任務的檢查面向，不是新的操作順序；右側是其他測試情境。沿用既定成功標準與測試條件，不因修改而放寬要求。接下來先用漏Builder的報告任務，示範完整流程如何核對。';
    e.points=['完整任務：交付結果、執行步驟、工具與參數都要核對。','其他情境：重跑原本通過的案例，檢查是否退步。'];
    e['接下一頁']='先回到漏Builder的問題：這版Skill修改後，必要的Builder有沒有真的被呼叫？';
  }
  if(old.n===48){
    e.sourceFile=added+'/judge-rubric.png';
    e['核心訊息']='明確條件用程式檢查；需要語意理解的輸出品質，交給Judge依評分準則與參考範例輔助評審。';
    e['搭配講稿']='前面核對了Builder呼叫、傳入資料與報告交付，現在對應適合的驗收方法。Builder有沒有呼叫、Ref是否有效、必要欄位是否齊全，能明確判定就用程式。若要評估是否回應需求、語意上是否涵蓋重點等輸出品質，可以把輸出內容、評分準則與參考範例交給Judge，得到分數或是否達標的判定。固定格式本身不需要再請Judge判斷；這裡是選用方法，不是在Builder案例上硬加一道模型評審。Judge也可能判錯，需用人工判定樣本核對與校準。它不會自動驗證來源真偽；若特別提供來源與groundedness準則，才可另外輔助評估支持程度，這不是本頁重點。測試評審仍不是執行保證。';
    e.points=['Builder呼叫、有效Ref、必要欄位等明確條件，用程式檢查。','Judge讀取輸出、準則與範例，評審是否符合需求、涵蓋重點；仍需校準。'];
  }
  if([44,48].includes(old.n)){
    e.imageEdited=true;e.sourceProvenance=base+'/'+old.file;e.sourceSha256=old.sha256;
    delete e.editBounds;delete e.outsideRepairRegionChangedPixels;
  }
  if(old.n===50)e['接下一頁']='既然有可檢驗的接受標準，就可以讓AI產生候選Skill，再用測試結果決定是否接受。';
  if(old.n===52)e['搭配講稿']='有了前面的測試與接受標準，就可以把Skill撰寫也交給AI協助。在我的系統裡，從第一版Skill到功能完成，我沒有手寫過一行Prompt。我讓協助開發的AI讀PRD、SOP和程式碼，產生第一版Skill，再跑Evaluation找出實際行為和目標的差距。這不是沒有人的要求，也不是AI自行定義成功；人仍然負責需求與接受標準。這裡的AI是協助開發的角色，不是正式執行任務的Agent。';
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
  if(e.previousV39&&![34,35,36,42,44,45,48].includes(e.previousV39))assert.equal(e.sha256,source.entries[e.previousV39-1].sha256);
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  assert.equal(hash(read(dest+'/'+e.file)),e.sha256);
}
assert.equal(entries[36].previousV39,37);
assert.equal(entries[37].title,bridge.title);
assert.equal(entries[38].previousV39,38);
assert.deepEqual(entries.slice(33,36).map(e=>e.title),['Agent 要做什麼，有時需要人先確認','先確認目標與範圍，再開始任務','寫入、扣款或通知前，先取得批准']);
assert.deepEqual(entries.slice(44,50).map(e=>e.previousV39),[51,44,46,47,45,48]);
const notice='v40共59頁：38頁改為「除了防錯，也要能追查出錯原因」，明確從執行前防錯換到出錯後追查；圖中補出看見錯誤不等於知道原因，37與39頁講稿銜接同步。本輪只重畫38頁，其他58張目前圖像不變。保留34～36頁具體標題、33頁輸出轉行動確認、45～52頁回歸風險與修改驗收順序；相較v39保留51張原圖，圖片無內嵌頁碼，歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 59頁分頁稿 v40｜防錯與追查的轉場\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 59頁圖片與講稿 v40\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md) · [產圖提示](PROMPTS.json)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# v39至v40頁碼對照\n\n37：批准後重新檢查條件。38（新增，已重畫）：除了防錯，也要能追查出錯原因。39（原38）：出錯後回看執行。40（原39）：漏Builder案例。41、42（原40、41）：留下資訊並對照紀錄。\n\n現45（原51）：修A壞B；46（原44）：完整流程與其他情境重測；47～49（原46、47、45）：Builder呼叫、傳入資料、報告交付；50（原48）：程式與Judge；51～52（原49、50）：回歸案例與接受門檻；53開始AI協助撰寫Skill。總數59頁不變。\n\n| v40 | v39 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV39??'新增'} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>59頁執行轉場</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>59頁執行轉場</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v40',count:59,status:'pending_user_review',numberingNotice:notice,insertedPages:[38],entries},null,2));
write(dest+'/PROMPTS.json',JSON.stringify({tool:'built-in image_gen',bridge:JSON.parse(read(added+'/INVESTIGATION-TRANSITION-PROMPT.json')),slides34to36:JSON.parse(read(added+'/HITL-DIRECT-TITLES-PROMPTS.json')),slide43:JSON.parse(read(added+'/SLIDE-43-REMOVE-FOOTER-PROMPT.json')),slide49:JSON.parse(read(added+'/REPORT-FORMAT-TITLE-PROMPT.json')),slides46and50:JSON.parse(read(added+'/REGRESSION-JUDGE-PROMPTS.json'))},null,2));
write(dest+'/verification.json',JSON.stringify({count:59,insertedPages:[38],revisedOriginalImages:[34,35,36,43,46,49,50],revisedInsertedImages:[38],preservedV39Images:51,allUnmodifiedOriginalHashesMatch:true,originalRelativeOrderPreserved:false,originalSourceOrder:sourceOrder,reorderedV39Pages:[51,44,46,47,45,48,49,50],revisedNarration:[33,34,35,36,37,38,39,44,45,46,48,49,50,52,53],pdfUpdated:false,verification:'docs/verification/2026-10-13-v40-investigation-transition.md'},null,2));
console.log(JSON.stringify({count:59,dest,story,preservedV39Images:51,insertedPage:38,hitlTitlesAt:[34,35,36],regressionRiskAt:45,fullRetestAt:46,judgeAt:50,reportAt:49,validationOrder:['Builder呼叫','傳入資料','報告驗收']}));
