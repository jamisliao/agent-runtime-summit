// Integrate approved slides10/11; preserve v30 and the other54 images.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const base='images/candidates/2026-10-08-v30-slides-01-56-slide05-integrated';
const approved='images/candidates/2026-10-08-v31-log-10-11-preview';
const out='images/candidates/2026-10-08-v32-slides-01-56-log-context-integrated';
const story='storyboard/56-slide-storyboard-v32-integrated.md';
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const json=f=>JSON.parse(read(f));
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex');
const write=(f,t)=>fs.writeFileSync(path.join(root,f),t);
const save=(f,v)=>write(f,JSON.stringify(v,null,2)+'\n');
const pad=n=>String(n).padStart(2,'0');
const esc=t=>String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const previous=json(base+'/manifest.json');
assert.equal(previous.entries.length,56);
assert.equal(hash(approved+'/slide-10.png'),'74c6abfec24f73aa63d7d8677985649324829fa5c77401cd43b56eb48af41faa');
assert.equal(hash(approved+'/slide-11.png'),'eb62a0346a714151367f2fbd1c918aac8d1c67106a0ae965b071f79f16322bd4');
const baseline=previous.entries.map(e=>hash(base+'/'+e.file));
fs.mkdirSync(path.join(root,out),{recursive:true});
const revised={
  10:{
    title:'查線上問題，卻把 Context 塞爆了',
    核心訊息:'工具查回完整Log不是問題；把大量原始Log原封不動塞回Context，才是這次踩坑的原因。',
    畫面文字:'查線上問題，卻把 Context 塞爆了｜任務：分析線上問題｜LLM：先查 Log｜Tool 回傳：大量原始 Log｜整包塞回｜Context 爆量｜查回整包，不代表要整包塞入',
    畫面設計:'保留原任務卡、放大鏡、原始Log紙堆、LLM對話框與Context文件icon，沿用深藍鋼筆字形、稀疏排線與米白淡格紙。移除問號，珊瑚箭頭標示整包塞回；Context以密集文字線、外溢紙張與珊瑚強調線表示爆量。文字交代先查Log是LLM為分析線上問題決定的下一步。底部金句與底線強調取得整包不等於全部回塞。圖內頁碼10。',
    搭配講稿:'前面說的是工具之間怎麼搬資料。現在回到我實際遇到的任務：我想分析某個線上問題，LLM判斷要先取得Log，就呼叫工具去查。Tool查回來的是一大包原始Log。我當時直接把這整包結果塞回Context，結果Context就爆量了。問題不是工具查到了完整資料，而是我沒有先判斷：這次分析真正需要哪些內容，就把原始資料全部交回模型。這裡先談資料怎麼進Context，不是在談模型捏造結論。',
    接下一頁:'所以我需要改的，是Log交回模型之前的處理：先依這次線上問題篩選，再放進Context。',
    points:['任務是分析線上問題；LLM判斷先查Log，Tool回傳大量原始紀錄。','整包原封不動塞回Context，造成Context爆量；取得完整資料不等於模型必須讀完整包。']
  },
  11:{
    title:'Log 先篩選，再放進 Context',
    核心訊息:'依這次線上問題挑選相關Log，再準備給模型的Context；不是把工具查回的完整結果原封不動回塞。',
    畫面文字:'Log 先篩選，再放進 Context｜依這次問題，挑出需要的 Log｜原始 Log｜時間範圍｜必要欄位｜分類與代表片段｜摘要｜本輪分析用 Context｜原始資料保留，需要時再取',
    畫面設計:'保留原始Log文件、時間範圍日曆、必要欄位、分類片段、摘要與Context文件icon。中間四種方法以括號表示依問題選用，不在彼此之間畫箭頭或標成固定四步。原始Log→按需處理→本輪分析Context是主結構。保留手寫鋼筆字形、排線、少量色鉛筆色彩與米白淡格紙；底部大字加綠色底線強調原始資料保留。圖內頁碼11。',
    搭配講稿:'延續剛剛分析線上問題的任務：Log查回來之後，先挑出這次分析需要的內容，再放進Context。問題涉及哪段時間，就縮小時間範圍；只需要部分欄位，就挑必要欄位；重複內容很多，可以分類、取代表片段；必要時再做摘要。這些是按問題選用的方法，不是每次都要做完四步，也不是把某幾個關鍵字一篩就當作找到根因。原始完整Log仍保留在系統，需要更多細節時可以再取。模型需要讀相關內容，但不需要每次都讀一大包未整理的原始資料。',
    接下一頁:'先篩選Log能避免盲目塞爆Context，但控制Context不只是省Token；即使還沒超過上限，也會影響模型同時顧資料與流程的負擔。',
    points:['先依這次線上問題篩選相關Log，再放進本輪分析用Context。','時間範圍、必要欄位、分類片段與摘要按需選用；原始資料保留，需要時再取。']
  }
};
const entries=previous.entries.map((old,i)=>{
  const changed=[10,11].includes(old.n), source=(changed?approved:base)+'/'+old.file;
  fs.copyFileSync(path.join(root,source),path.join(root,out,old.file));
  const bytes=fs.readFileSync(path.join(root,out,old.file));
  const entry={...old,...(changed?revised[old.n]:{}),sourceFile:out+'/'+old.file,previousSourceFile:base+'/'+old.file,sourceImages:[source],sha256:hash(out+'/'+old.file),pixelSize:{width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)},mode:changed?'approved_log_context_integrated':'unchanged_v30',contentRevised:changed};
  if(changed)Object.assign(entry,{status:'user_accepted',userVisualAcceptance:'ACCEPTED',typographyReview:'user_accepted_reference_image',generatedSource:'/Users/jamisliao/.codex/generated_images/01a0d1a3-8eb4-71c0-8ac2-89156edbfb41/'+(old.n===10?'exec-67ad8949-03b5-4d62-83ed-ff509f06afda.png':'exec-5232b034-79b0-43aa-8973-dcc6569053ec.png')});
  assert.equal(hash(base+'/'+old.file),baseline[i]);
  assert.equal(entry.sha256,hash(source));
  if(!changed)assert.equal(entry.sha256,baseline[i]);
  return entry;
});
const notice='整合使用者確認的第10、11頁：分析線上問題→查Log→整包回塞使Context爆量→先篩選再交回模型。總數56頁、頁序不變，其餘54張圖片與v30位元組相同，已確認的第5頁保留。舊版本保留，不代表整份圖集或會場投影已驗收。未commit／push。';
save(out+'/manifest.json',{...previous,version:'v32-56pages-log-context-integrated',date:'2026-10-08',status:'pending_user_review',sourceManifest:'../2026-10-08-v30-slides-01-56-slide05-integrated/manifest.json',sourceStoryboard:'../../../storyboard/56-slide-storyboard-v30-integrated.md',integratedStoryboard:'../../../'+story,numberingNotice:notice,replacedImagePages:[10,11],redrawnPages:[10,11],contentRevisedPages:[10,11],insertedPages:[],userAcceptedPages:[5,10,11],entries});
save(out+'/GENERATION.json',{version:'v32',date:'2026-10-08',count:56,approvedSlides:[10,11],originalGeneration:approved+'/PROMPTS.md',entries:entries.map(e=>({n:e.n,file:e.file,mode:e.mode,source:e.sourceImages[0],sha256:e.sha256}))});
save(out+'/PROMPTS.json',{inherited:base+'/PROMPTS.json',slides10and11:read(approved+'/PROMPTS.md')});
const fields=['核心訊息','畫面文字','畫面設計','搭配講稿','接下一頁'];
const index='## 全頁索引\n\n|頁碼|標題|\n|---|---|\n'+entries.map(e=>`|[${pad(e.n)}](#slide-${pad(e.n)})|${e.title}|`).join('\n')+'\n\n';
const sections=images=>entries.map(e=>`<a id="slide-${pad(e.n)}"></a>\n\n## ${pad(e.n)}｜${e.title}\n\n章節：${e.chapter}；圖內編號${pad(e.n)}。\n\n${images?`![${pad(e.n)} ${e.title}](${e.file})\n\n`:''}${fields.map(k=>`### ${k}\n\n${e[k]}\n`).join('\n')}\n### 本頁重點\n\n${e.points.map(p=>'- '+p).join('\n')}\n`).join('\n');
const intro='# 自己刻 Agent 框架｜56頁完整整合 v32\n\n'+notice+'\n\n';
const limits='精確字型、實際pt與會場投影未驗收。Trace回看指保存的歷史紀錄，不保證重新執行得到相同答案，也不表示讀取模型內心。\n\n';
write(story,intro+`[含圖講稿](../${out}/README.md) · [上一版56頁](56-slide-storyboard-v30-integrated.md)\n\n`+limits+index+sections(false));
write(out+'/README.md',intro+`[只看56頁圖片](gallery-images-only.html) · [圖片、重點與講稿](gallery.html) · [56頁分頁稿](../../../${story}) · [生成紀錄](GENERATION.json) · [檢查紀錄](verification.json)\n\n`+limits+index+sections(true));
const template=read(base+'/gallery-images-only.html').split('<body')[0].replaceAll('v30','v32');
write(out+'/gallery-images-only.html',template+`<body class="images-only"><main>${entries.map(e=>`<figure id="slide-${pad(e.n)}"><img src="${e.file}?v=${e.sha256.slice(0,12)}" alt="${pad(e.n)} ${esc(e.title)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" ${e.n>2?'loading="lazy"':''}></figure>`).join('\n')}</main></body></html>\n`);
write(out+'/gallery.html',template.replace('純圖片','圖片與講稿')+`<body><header><h1>56頁圖片與講稿 v32</h1><p>${esc(notice)}</p><p><a href="gallery-images-only.html">只看圖片</a> · <a href="README.md">含圖文字稿</a></p></header><main>${entries.map(e=>`<article id="slide-${pad(e.n)}"><h2>${pad(e.n)}｜${esc(e.title)}</h2><img src="${e.file}?v=${e.sha256.slice(0,12)}" alt="${esc(e.title)}" width="${e.pixelSize.width}" height="${e.pixelSize.height}" loading="lazy"><details><summary>本頁重點、講稿與轉場</summary><ul>${e.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>${fields.map(k=>`<h3>${k}</h3><p>${esc(e[k]).replaceAll('\n','<br>')}</p>`).join('')}</details></article>`).join('\n')}</main></body></html>\n`);
save(out+'/verification.json',{status:'PASS_WITH_KNOWN_LIMITATIONS',count:56,updatedPages:[10,11],userAcceptedPages:[5,10,11],other54ImagesByteIdentical:true,oldV30ImagesPreserved:true,projection:'NOT_RUN',exactFontMatch:'NOT_VERIFIED',gitPush:'NOT_REQUESTED'});
let links=0;
for(const file of [story,out+'/README.md',out+'/gallery.html',out+'/gallery-images-only.html']){
  const text=read(file);
  for(const m of text.matchAll(/\]\(([^)]+)\)|(?:src|href)="([^"]+)"/g)){
    const target=m[1]||m[2];if(/^(https?:|#)/.test(target))continue;
    assert(fs.existsSync(path.resolve(root,path.dirname(file),target.split(/[?#]/)[0])),`Broken link ${file} -> ${target}`);links++;
  }
  assert.equal([...text.matchAll(file.endsWith('.html')?/id="slide-\d+"/g:/^## \d{2}｜/gm)].length,56);
}
console.log(JSON.stringify({out,story,count:56,updatedPages:[10,11],other54ImagesByteIdentical:true,links}));
