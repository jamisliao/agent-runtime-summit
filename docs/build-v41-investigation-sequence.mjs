import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-13-v40-slides-01-59-execution-bridge';
const added='images/candidates/2026-10-13-v41-investigation-preview';
const dest='images/candidates/2026-10-13-v41-slides-01-58-investigation';
const story='storyboard/58-slide-storyboard-v41-investigation.md';
const read=p=>fs.readFileSync(path.join(root,p));
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.trimEnd()+'\n');
const hash=b=>createHash('sha256').update(b).digest('hex');
const source=JSON.parse(read(base+'/manifest.json'));
assert.equal(source.count,59);
assert.equal(source.entries[38].title,'任務出錯時，要能回看當時的執行');
const sourceOrder=source.entries.filter(e=>e.n!==39).map(e=>e.n);
[sourceOrder[49],sourceOrder[50]]=[sourceOrder[50],sourceOrder[49]];
assert.equal(new Set(sourceOrder).size,58);
fs.mkdirSync(path.join(root,dest),{recursive:true});
const entries=sourceOrder.map((oldN,index)=>{
  const old=source.entries[oldN-1];
  const e={...old,n:index+1,previousV40:oldN,sourceFile:base+'/'+old.file,revisedInV41:false};
  if(oldN===16){
    e.sourceFile='images/candidates/2026-10-14-slide16-weight-preview/slide-16.png';
    e.sourceProvenance=base+'/'+old.file;e.sourceSha256=old.sha256;
    e.imageEdited=true;e.revisedInV41=true;
    delete e.editBounds;delete e.outsideRepairRegionChangedPixels;
  }
  if(oldN===50)e['接下一頁']='有了驗收方式，接著要決定：同一情境要通過幾次，才接受這版修改？';
  if(oldN===52)e['接下一頁']='訂好接受門檻，還要把踩過的坑留進測試集，讓後續修改持續重測。';
  if(oldN===51)e['接下一頁']='有了持續累積的測試集與接受標準，就能讓AI產生候選Skill，再用測試結果決定是否接受。';
  if(oldN===37)e['接下一頁']='前面談的是執行前防錯。接下來換到追查：看見任務出了問題，是否就知道原因在哪裡？';
  if(oldN===38){
    e['核心訊息']='從防錯轉到追查：漏步驟、工具失敗或交付不符要求是看見的問題，不能只憑結果就認定原因在Skill、模型或工具。';
    e['搭配講稿']='前面談怎麼在執行前防錯，現在換到出了問題要怎麼追查。漏步驟、工具失敗、交付不符要求，都是我們可能看見的問題；但看見這些現象，還不能直接說是Skill沒說清楚、模型沒照做，還是工具的問題。右側三個問號代表待確認方向，不是已查明原因。這頁只帶出追查需求，不再重講批准，也不先展開四類紀錄。接著回到漏Builder那次，說明為什麼必須留下出錯當時的資料。';
    e['接下一頁']='回到漏Builder那次：如果再跑一次得到不同結果，能解釋上次為什麼漏掉嗎？';
    e.points=['看見漏步驟或交付錯誤，不等於知道原因。','Skill、模型與工具是待查方向，需要當時的資料才能進一步判斷。'];
  }
  if(oldN===40){
    e.title='再跑一次，不能代替回看出錯那次';
    e['核心訊息']='追查漏Builder，需要出錯那次的執行紀錄；同一任務重新執行得到的結果，不能取代原本那次的資料。';
    e['搭配講稿']='回到前面漏Builder的案例。為了找問題，我們可能會再跑一次；但同一個任務的新執行，可能產生不同模型回應、工具呼叫或結果。這次有沒有呼叫Builder，不能直接解釋上次為什麼漏了它。圖中兩條執行是方法示意，不是新增實測；下方仍是同一個任務，不是刻意換題。重跑可以作為後續測試或比較，但追查原本那次，仍要看那次實際收到什麼、模型回了什麼、工具做了什麼。缺少紀錄，不能拿另一輪的資料補成當時事實。';
    e['接下一頁']='所以執行時要把這四類資訊留下來，並且對得上同一次任務。';
    e.points=['重新執行是另一輪，可能得到不同回應與結果。','追查出錯那次，要用那次的資料；重跑不能取代原始紀錄。'];
  }
  if(oldN===41){
    e['搭配講稿']='上一頁說要回看出錯那次，這裡具體列出需要留下的四類資料：當輪實際送出的Context、模型回應、Tool的呼叫參數與結果或錯誤，以及模型、Skill與相關版本設定。資訊必須能對回同一次任務與相應呼叫，版本標記也要能找回實際Skill內容。保存時遮蔽敏感資料或限制存取。這些是追查依據，不是保證重新執行會得到相同結果。';
    e.points=['Context與模型回應：確認實際收到與輸出了什麼。','Tool呼叫與結果：確認要求、參數、結果或錯誤。','版本與設定：保留當時使用的模型及Skill等資訊。'];
  }
  if(oldN===42)e['搭配講稿']='有了上一頁的四類資訊，再沿用漏Builder案例逐段核對。先看當輪Context有沒有送入Builder指示，再看模型回應有沒有提出Builder呼叫，最後看Tool執行紀錄中呼叫有沒有實際執行、是否回傳錯誤。這是查出在哪個環節發生缺漏，不是只憑其中一項就確認根本原因。三個問題都待紀錄確認；若紀錄不完整，查不到也不能直接當作沒有發生。';
  if([38,40].includes(oldN)){
    e.sourceFile=added+`/slide-${e.n}.png`;
    e.sourceProvenance=base+'/'+old.file;e.sourceSha256=old.sha256;
    e.imageEdited=true;e.revisedInV41=true;
    delete e.editBounds;delete e.outsideRepairRegionChangedPixels;
  }
  const bytes=read(e.sourceFile);
  e.file=`slide-${String(e.n).padStart(2,'0')}.png`;
  e.sha256=hash(bytes);
  e.pixelSize={width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
  if(!e.revisedInV41)assert.equal(e.sha256,old.sha256,`preserved source ${oldN}`);
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  assert.equal(hash(read(dest+'/'+e.file)),e.sha256);
  return e;
});
assert.equal(entries.length,58);
assert.equal(entries.filter(e=>!e.revisedInV41).length,55);
assert.deepEqual(entries.slice(36,42).map(e=>e.previousV40),[37,38,40,41,42,43]);
assert.equal(entries[38].title,'再跑一次，不能代替回看出錯那次');
assert.equal(entries.at(-1).title,'模型會越來越聰明，但是你的口袋沒有越來越深。');
assert.deepEqual(entries.slice(48,52).map(e=>e.previousV40),[50,52,51,53]);
assert.equal(entries[49].title,'通過幾次，才接受這版修改？');
assert.equal(entries[50].title,'踩過的坑，留進回歸測試');
const cues=JSON.parse(read('docs/speaker-cues-v41.json'));
assert.equal(cues.length,entries.length);
for(const [i,e]of entries.entries()){
  const cue=cues[i];
  assert.equal(cue.n,e.n);assert.equal(cue.title,e.title);
  e['核心訊息']=cue.message;e.points=cue.points;e['接下一頁']=cue.transition;
}
const notice='v41共58頁：原39頁泛用追查轉場不再列入播放，內容由新38頁承接；新38、39頁重畫，分別說明看見錯誤不等於知道原因、重跑不能取代出錯那次的紀錄。37頁保留；原41、42、43頁依序成為新40、41、42頁，說明四類資訊、Builder逐段對照與AI協助找線索。2026-10-14第16頁換為文字字重修正版，內容不改；相較v40共55張圖像依來源SHA逐位元保留，無內嵌頁碼；舊版完整保留，歷史PDF未更新。2026-10-14交換原v41第50、51頁：新50為接受門檻、新51為回歸測試累積，49～51轉場同步，圖片內容不變。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 58頁分頁稿 v41｜追查章節去重\n\n'+notice+'\n\n2026-10-14講者提示已精簡為主旨、重點與轉場；原搭配講稿保留於此文件，站台不顯示長講稿。\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 58頁圖片與講稿 v41\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md) · [產圖提示](PROMPTS.json)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# v40至v41頁碼對照\n\n原39頁不再列入播放，舊檔仍保留。原40起順延一頁，總數59改為58。2026-10-14再交換原v41的50、51頁：目前50對應v40的52，51對應v40的51。\n\n| v41 | v40 | 標題 |\n|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV40} | ${e.title} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>58頁追查章節整合</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery-review-37-42.html',head+'<header><h1>37～42頁連續預覽</h1><p>37條件檢查 → 38看見問題與原因不同 → 39出錯那次的紀錄 → 40四類資訊 → 41逐段對照 → 42 AI協助找線索</p></header><main>'+entries.filter(e=>e.n>=37&&e.n<=42).map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}</article>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>58頁追查章節整合</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v41',count:58,status:'pending_user_review',numberingNotice:notice,removedFromPlayback:[39],entries},null,2));
write(dest+'/PROMPTS.json',JSON.stringify({investigation:JSON.parse(read(added+'/PROMPTS.json')),slide16:JSON.parse(read('images/candidates/2026-10-14-slide16-weight-preview/PROMPT.json'))},null,2));
write(dest+'/verification.json',JSON.stringify({count:58,base,originalSourceOrder:sourceOrder,removedFromPlayback:[39],revisedImages:[16,38,39],preservedV40Images:55,allUnmodifiedSourceHashesMatch:true,swappedPreviousV41Pages:[50,51],speakerCuesSource:'docs/speaker-cues-v41.json',originalNotesPreserved:true,pdfUpdated:false,verification:'docs/verification/2026-10-14-slide16-weight-integration.md'},null,2));
console.log(JSON.stringify({count:58,dest,story,preservedV40Images:55,newImages:[16,38,39],removedV40Page:39}));
