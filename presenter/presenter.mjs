import { navigationIndex, pageIndexFromInput, acceptMessage, projectionAck } from './core.mjs';

const byId = id => document.getElementById(id);
const session = crypto.randomUUID();
let slides = [], index = 0, popup = null, ready = false, details = null;
let slideStorageKey = 'runtime-slide-index';
let projection = {revision:0, requested:0, shown:null,status:'closed'};
let popupCheck = null;
let fullscreenCheck = null;
const hint = text => { byId('setup-hint').textContent = text; };
const save = (key,value) => { try { localStorage.setItem(key,String(value)); } catch {} };
const restore = key => { try { return localStorage.getItem(key); } catch { return null; } };
let notesSize = Math.max(18, Math.min(36, Number(restore('runtime-notes-size')) || 22));
document.documentElement.style.setProperty('--notes-size', `${notesSize}px`);
// Fit actual rendered content, not a fixed character-count estimate. Never clip cues.
function fitCues() {
  const panel=byId('speaker-cues');
  let effective=notesSize;
  document.documentElement.style.setProperty('--notes-size',`${effective}px`);
  if(window.matchMedia('(min-width:1024px)').matches){
    while(panel.scrollHeight>panel.clientHeight+1 && effective>18){
      effective--;
      document.documentElement.style.setProperty('--notes-size',`${effective}px`);
    }
  }
  byId('notes-size-status').textContent=effective<notesSize ? `${effective}px · 適配畫面` : `${effective}px`;
}
const cueObserver=new ResizeObserver(()=>fitCues());
cueObserver.observe(byId('speaker-cues'));

function send(message) {
  if (popup && !popup.closed) popup.postMessage({...message,session},location.origin);
}
function showProjectionStatus() {
  const shown = projection.shown === null ? '' : `第 ${projection.shown+1} 頁`;
  const texts = {
    closed:'尚未開啟投影', loading:shown ? `正在切換；投影仍為${shown}` : '投影正在載入…',
    shown:`投影已同步 · ${shown}`, error:shown ? `載入失敗；投影仍為${shown}` : '投影圖片載入失敗'
  };
  byId('projection-status').textContent = texts[projection.status];
  byId('preview-label').textContent = projection.status === 'shown' ? '目前投影' : '目前選取';
}
function syncProjection() {
  if (!ready) return;
  projection = {...projection,revision:projection.revision+1,requested:index,status:'loading'};
  const {src,title} = slides[index];
  // Never send speaker notes to the audience window.
  send({type:'slide',index,count:slides.length,revision:projection.revision,src,title});
  showProjectionStatus();
}
function goTo(next) {
  if (!slides.length || !Number.isInteger(next)) return;
  index = Math.max(0,Math.min(slides.length-1,next));
  const slide = slides[index], upcoming = slides[index+1];
  byId('current-slide').src = slide.src;
  byId('current-slide').alt = `${slide.n}｜${slide.title}`;
  byId('chapter').textContent = `${String(slide.n).padStart(2,'0')} / ${slide.chapter}`;
  byId('slide-message').textContent = slide.displayMessage;
  byId('slide-key-points').replaceChildren(...slide.points.map(point => {
    const item = document.createElement('li'); item.textContent = point; return item;
  }));
  byId('transition').textContent = slide.transition;
  byId('page-number').value = slide.n;
  byId('previous').disabled = index === 0;
  byId('next').disabled = index === slides.length-1;
  byId('next-slide').hidden = !upcoming;
  if (upcoming) { byId('next-slide').src = upcoming.src; byId('next-slide').alt = upcoming.title; }
  byId('next-title').textContent = upcoming ? `${upcoming.n}｜${upcoming.title}` : '簡報結束';
  document.querySelectorAll('.thumbnail').forEach((button,n) => {
    if (n === index) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
  });
  fitCues();
  save(slideStorageKey,index);
  syncProjection();
}
function makeThumbnails() {
  const fragment = document.createDocumentFragment();
  slides.forEach((slide,n) => {
    const button = document.createElement('button'); button.className = 'thumbnail';
    button.setAttribute('aria-label',`第 ${slide.n} 頁：${slide.title}`);
    const image = document.createElement('img'); image.className = 'thumbnail__image';
    image.src = slide.src; image.alt = ''; image.loading = 'lazy';
    const caption = document.createElement('span'); caption.className = 'thumbnail__caption';
    const number = document.createElement('span'); number.className = 'thumbnail__number'; number.textContent = String(slide.n).padStart(2,'0');
    const title = document.createElement('span'); title.className = 'thumbnail__title'; title.textContent = slide.title;
    caption.append(number,title); button.append(image,caption); button.addEventListener('click',() => {goTo(n);byId('overview-dialog').close();}); fragment.append(button);
  });
  byId('thumbnails').replaceChildren(fragment);
}
function selectedScreen() {
  return details?.screens[Number(byId('screen-select').value)] ?? null;
}
function refreshScreens() {
  const select = byId('screen-select'); const previous = selectedScreen();
  select.replaceChildren(new Option('手動移動投影視窗','manual'));
  details.screens.forEach((screen,n) => {
    const marker = screen === details.currentScreen ? ' · 講者目前螢幕' : '';
    select.add(new Option(`${screen.label || `螢幕 ${n+1}`} · ${screen.width} × ${screen.height}${marker}`,String(n)));
  });
  const chosen = previous ? details.screens.indexOf(previous) : details.screens.findIndex(screen => screen !== details.currentScreen);
  if (chosen >= 0) select.value = String(chosen);
  hint(`找到 ${details.screens.length} 個螢幕。選擇投影螢幕，再開啟投影；全螢幕仍需要你的點擊授權。`);
}
byId('detect-screens').addEventListener('click',async () => {
  if (!window.isSecureContext || !('getScreenDetails' in window)) {
    hint('這個瀏覽器不支援自動指定螢幕。請用 Chrome 開啟 localhost；也可以手動拖曳投影視窗。'); return;
  }
  hint('等待瀏覽器的螢幕權限。若有授權視窗，請選擇允許；拒絕時仍可手動移動投影視窗。');
  try {
    if (!details) {
      details = await window.getScreenDetails();
      details.addEventListener('screenschange',() => { refreshScreens(); hint('螢幕連線已改變，請重新確認投影螢幕。'); });
      details.addEventListener('currentscreenchange',refreshScreens);
    }
    refreshScreens();
  } catch { hint('未取得螢幕權限。仍可開啟投影，手動拖到第二個螢幕，再按 L 全螢幕。'); }
});

function projectionClosed() {
  ready = false; popup = null; projection = {...projection,shown:null,status:'closed'};
  clearInterval(popupCheck); popupCheck = null;
  clearTimeout(fullscreenCheck); fullscreenCheck = null;
  byId('close-projection').disabled = true; byId('projection-fullscreen').disabled = true;
  byId('open-projection').textContent = '開啟投影';
  showProjectionStatus();
}
byId('open-projection').addEventListener('click',() => {
  if (!slides.length) return;
  const screen = selectedScreen();
  if (!popup || popup.closed) {
    ready = false; projection = {...projection,shown:null,status:'loading'};
    const width = screen ? screen.availWidth : 1100, height = screen ? screen.availHeight : 700;
    const placement = screen ? `,left=${screen.availLeft},top=${screen.availTop}` : '';
    popup = window.open(`/projection.html?session=${encodeURIComponent(session)}`,`runtime-projection-${session}`,
      `popup=yes,width=${width},height=${height}${placement}`);
    if (!popup) { projectionClosed(); hint('瀏覽器阻擋了投影視窗。請允許本網站的彈出式視窗，再按「開啟投影」。'); return; }
    popupCheck = setInterval(() => { if (popup?.closed) { projectionClosed(); hint('投影視窗已關閉。講稿與選取頁碼已保留。'); } },1000);
  } else {
    if (screen && !popup.document.fullscreenElement) { popup.moveTo(screen.availLeft,screen.availTop); popup.resizeTo(screen.availWidth,screen.availHeight); }
    syncProjection();
  }
  byId('close-projection').disabled = false; byId('open-projection').textContent = '顯示投影視窗';
  popup.focus(); showProjectionStatus();
  hint('投影視窗已開啟。按「投影全螢幕」；若瀏覽器拒絕，請在投影視窗按 L。講稿留在這個視窗。');
});
byId('projection-fullscreen').addEventListener('click',() => {
  if (!ready || !popup || popup.closed) return;
  clearTimeout(fullscreenCheck); fullscreenCheck = null;
  hint('正在請求投影全螢幕，等待瀏覽器確認…');
  try {
    const screen = selectedScreen();
    if (screen && !popup.document.fullscreenElement) {
      popup.moveTo(screen.availLeft,screen.availTop);
      popup.resizeTo(screen.availWidth,screen.availHeight);
    }
    // Delegate this click's fullscreen capability; never send ScreenDetailed
    // (not structured-cloneable), await first, or grant persistent permission.
    popup.postMessage({type:'enter-fullscreen',session},
      {targetOrigin:location.origin,delegate:'fullscreen'});
    fullscreenCheck = setTimeout(() => {
      fullscreenCheck = null;
      hint('未收到瀏覽器的全螢幕確認。可在控制台再點「投影全螢幕」，或在投影視窗按 L 備援。');
    },3500);
  } catch {
    hint('瀏覽器未能送出全螢幕授權。請在投影視窗按 L；也可回到控制台再次點「投影全螢幕」。');
  }
});
byId('close-projection').addEventListener('click',() => { popup?.close(); projectionClosed(); hint('投影已關閉。'); });
window.addEventListener('message',event => {
  if (!acceptMessage(event,popup,location.origin,session)) return;
  const message = event.data;
  if (message.type === 'ready') {
    ready = true; byId('projection-fullscreen').disabled = false; syncProjection();
  } else if (['displayed','load-error'].includes(message.type)) {
    projection = projectionAck(projection,message); showProjectionStatus();
  } else if (message.type === 'navigate') {
    const next = navigationIndex(index,slides.length,{key:message.key}); if (next !== null) goTo(next);
  } else if (message.type === 'fullscreen') {
    clearTimeout(fullscreenCheck); fullscreenCheck = null;
    hint(message.active ? '投影已進入全螢幕；觀眾只會看到圖片。你可以繼續在這裡換頁。' : '投影已退出全螢幕，可再次按「投影全螢幕」。');
  } else if (message.type === 'fullscreen-error') {
    clearTimeout(fullscreenCheck); fullscreenCheck = null;
    hint('瀏覽器沒有允許跨視窗全螢幕。請在投影視窗按 L；選擇的螢幕位置仍會保留。');
  }
});
byId('previous').addEventListener('click',() => goTo(index-1));
byId('next').addEventListener('click',() => goTo(index+1));
function commitPageInput() {
  const next = pageIndexFromInput(byId('page-number').value,slides.length);
  if (next !== null && next !== index) goTo(next);
  byId('page-number').value = index+1;
}
byId('page-number').addEventListener('change',commitPageInput);
byId('page-number').addEventListener('blur',commitPageInput);
byId('page-number').addEventListener('keydown',event => {
  if (event.key === 'Enter') {event.preventDefault();commitPageInput();}
});
document.addEventListener('keydown',event => {
  if(byId('overview-dialog').open)return;
  const next = navigationIndex(index,slides.length,event); if (next !== null) {event.preventDefault(); goTo(next);}
});
for (const [id,delta] of [['notes-smaller',-2],['notes-larger',2]]) {
  byId(id).addEventListener('click',() => { notesSize = Math.max(18,Math.min(36,notesSize+delta));
    fitCues(); save('runtime-notes-size',notesSize); });
}
byId('open-overview').addEventListener('click',()=>byId('overview-dialog').showModal());
byId('close-overview').addEventListener('click',()=>byId('overview-dialog').close());
byId('current-slide').addEventListener('error',() => { byId('app-status').textContent = '預覽圖片讀取失敗，請確認本機服務仍在執行。'; });
window.addEventListener('pagehide',() => { popup?.close(); clearInterval(popupCheck); });

try {
  const response = await fetch('./deck.json');
  if (!response.ok) throw new Error('deck missing');
  const deck = await response.json(); slides = deck.slides;
  if (!Array.isArray(slides) || !Number.isInteger(deck.count) || slides.length !== deck.count || !slides.length) throw new Error('invalid deck');
  slideStorageKey = `runtime-slide-index-${deck.id}`;
  const stored = Number(restore(slideStorageKey));
  byId('page-number').max = String(slides.length);
  byId('page-total').textContent = `/ ${slides.length}`;
  byId('deck-edition').textContent = `${slides.length} 頁 · 圖片 ${deck.imageVersion} / 講稿 ${deck.notesVersion}`;
  makeThumbnails(); goTo(Number.isInteger(stored) ? stored : 0);
  byId('app-status').textContent = `${slides.length} 頁 · 精簡提示已載入 · 原圖不裁切`;
} catch {
  byId('app-status').textContent = '簡報載入失敗。請使用 README 的本機 HTTP 啟動方式，不要直接開啟 HTML 檔案。';
  byId('open-projection').disabled = true;
}
