import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro';
const edits='images/candidates/2026-10-13-v39-evaluation-edits';
const dest='images/candidates/2026-10-13-v39-slides-01-58-evaluation-titles';
const story='storyboard/58-slide-storyboard-v39-evaluation-titles.md';
const read=p=>fs.readFileSync(path.join(root,p));
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.trimEnd()+'\n');
const hash=b=>createHash('sha256').update(b).digest('hex');
const source=JSON.parse(read(base+'/manifest.json'));
assert.equal(source.count,58);
fs.mkdirSync(path.join(root,dest),{recursive:true});
const entries=source.entries.map(old=>{
  const e={...old,previousV38:old.n,sourceFile:base+'/'+old.file,revisedInV39:[23,24].includes(old.n)};
  if(e.n===23){
    e.title='把實際執行，對回任務要求';e.sourceFile=edits+'/slide-23-final.png';
    e['搭配講稿']='上一頁介紹實際執行與對照成功標準，現在用Builder案例核對一次。Skill要求呼叫Builder，並交付它產生的正式報告。我先看指定報告有沒有交付，但不能憑報告外觀判斷它來自Builder。接著查看工具呼叫紀錄，確認Builder有沒有被呼叫、回傳了什麼，再把Tool結果與最後交付的報告或引用對照。只有呼叫過Builder，也不代表最後交付用了它的輸出。這一頁就是把實際執行留下的依據，對回任務要求。圖中的問題是核對項目，不是新增實測結果。';
    e['接下一頁']='從剛才的核對，可以分成兩個評估面向：最後交付得對不對，以及實際執行的過程有沒有符合要求。';
  }
  if(e.n===24){
    e.title='Evaluation 要看結果，也要看執行過程';e.sourceFile=edits+'/slide-24.png';
    e['接下一頁']='結果與執行過程是評估的面向；接著看判斷方法，可以用程式檢查，也可以請模型依準則評審。';
  }
  if(e.n===25){
    e['搭配講稿']='上一頁的Outcome和Trajectory，是要評估什麼；這一頁是怎麼評估。Code-based Evaluation，是把明確條件寫成程式檢查，例如Builder有沒有呼叫、參數是否正確、交付是否對應工具回傳的結果。把實際工具步驟與預期軌跡比對，可以用Trajectory Matching；哪些步驟必須做、順序是否重要，要依任務要求決定。需要語意判斷時，可以讓模型依準則評審，這就是LLM-as-a-Judge。兩種方法能搭配，也不固定綁定結果或軌跡；Judge也可能判错。這裡的Builder案例有明確條件，用程式核對即可，接著就看這個做法。';
    e['搭配講稿']=e['搭配講稿'].replace('判错','判錯');
    e['接下一頁']='以Builder案例來說，呼叫有沒有發生、交付是否對應它的回傳結果，都能做成明確的程式檢查。';
  }
  const bytes=read(e.sourceFile);e.sha256=hash(bytes);
  e.pixelSize={width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
  if(!e.revisedInV39)assert.equal(e.sha256,old.sha256);
  fs.writeFileSync(path.join(root,dest,e.file),bytes);
  return e;
});
assert.equal(entries.filter(e=>!e.revisedInV39).length,56);
const notice='v39維持58頁與原頁序。第23頁改為「把實際執行，對回任務要求」，第24頁改為「Evaluation 要看結果，也要看執行過程」。第25頁保留Judge方法概覽，不加入獨立示範；26頁程式檢查接27頁重跑、28頁測試限制。其他56張原圖逐位元保留。圖片無內嵌頁碼；主稿、分頁稿與站台同步。新標題圖片待使用者視覺確認；歷史PDF未更新。';
const section=(e,prefix='')=>`## ${String(e.n).padStart(2,'0')}｜${e.title}\n\n章節：${e.chapter}\n\n![${e.title}](${prefix}${e.file})\n\n### 核心訊息\n\n${e['核心訊息']}\n\n### 搭配講稿\n\n${e['搭配講稿']}\n\n### 接下一頁\n\n${e['接下一頁']}\n\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n\n`;
write(story,'# 58頁分頁稿 v39｜Evaluation標題修正\n\n'+notice+'\n\n'+entries.map(e=>section(e,'../'+dest+'/')).join(''));
write(dest+'/README.md','# 58頁圖片與講稿 v39\n\n'+notice+'\n\n[純圖片](gallery-images-only.html) · [圖片與講稿](gallery.html) · [頁碼對照](PAGE-MAPPING.md) · [產圖提示](PROMPTS.json)\n\n'+entries.map(e=>section(e)).join(''));
write(dest+'/PAGE-MAPPING.md','# v38至v39頁碼對照\n\n原58頁順序與頁碼不變；取消59頁草稿中的Judge示範。\n\n| v39 | v38 | 標題 | 圖片 |\n|---|---|---|---|\n'+entries.map(e=>`| ${e.n} | ${e.previousV38} | ${e.title} | ${e.revisedInV39?'本輪標題修正':'原圖保留'} |`).join('\n'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const head='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>58頁 Evaluation標題修正</title><style>body{margin:0;background:#181818;color:#182849;font:20px system-ui}main{max-width:1672px;margin:auto}figure{margin:0 0 20px}img{display:block;width:100%;height:auto;max-height:100vh;object-fit:contain}article{background:#fffdf7;margin:0 0 30px;padding-bottom:20px}h2,article p,article ul{margin:20px}header{background:#eee9df;padding:20px}@media print{figure{break-after:page;margin:0}}</style></head><body>';
const img=e=>`<img loading="lazy" src="${e.file}?v=${e.sha256.slice(0,12)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" alt="${esc(e.title)}">`;
write(dest+'/gallery-images-only.html',head+'<main>'+entries.map(e=>`<figure id="slide-${String(e.n).padStart(2,'0')}">${img(e)}</figure>`).join('')+'</main></body></html>');
write(dest+'/gallery.html',head+'<header><h1>58頁 Evaluation標題修正</h1><p>'+notice+'</p></header><main>'+entries.map(e=>`<article id="slide-${String(e.n).padStart(2,'0')}"><h2>${e.n}｜${esc(e.title)}</h2>${img(e)}<p>${esc(e['核心訊息'])}</p><p>${esc(e['搭配講稿'])}</p><p>接下一頁：${esc(e['接下一頁'])}</p></article>`).join('')+'</main></body></html>');
write(dest+'/manifest.json',JSON.stringify({version:'v39',count:58,status:'pending_user_review',numberingNotice:notice,insertedPages:[],entries},null,2));
write(dest+'/PROMPTS.json',JSON.stringify({tool:'built-in image_gen',slide23:JSON.parse(read(edits+'/SLIDE-23-FINAL-PROMPT.json')),slide24:JSON.parse(read(edits+'/SLIDE-24-FINAL-PROMPT.json'))},null,2));
write(dest+'/verification.json',JSON.stringify({count:58,insertedPages:[],revisedImagesThisRevision:[23,24],preservedV38Images:56,originalRelativeOrderPreserved:true,allUnmodifiedOriginalHashesMatch:true,pdfUpdated:false,verification:'docs/verification/2026-10-13-v39-evaluation-judge.md'},null,2));
console.log(JSON.stringify({count:58,dest,story,preservedV38Images:56}));
