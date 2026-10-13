import { acceptMessage, navigationIndex, SlideLoader, validProjectionSlide } from './core.mjs';

const session = new URLSearchParams(location.search).get('session');
const parent = window.opener;
const hint = document.getElementById('projection-hint');
let image = document.getElementById('projected-slide');
let slideCount = 0;
const report = message => parent?.postMessage({...message,session},location.origin);
const loader = new SlideLoader({
  load:src => new Promise((resolve,reject) => {
    const next = new Image();
    next.onload = () => resolve(next); next.onerror = reject; next.src = src;
  }),
  render:(next,message) => {
    next.id = 'projected-slide'; next.className = 'projection__image'; next.alt = `${message.index+1}｜${message.title}`;
    image.replaceWith(next); image = next;
  },
  report
});

window.enterProjectionFullscreen = async screen => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen(screen ? {screen} : undefined);
    } else if (screen) {
      await document.documentElement.requestFullscreen({screen});
    }
  } catch { hint.textContent = '全螢幕未成功。請直接在這個視窗按 L 或點擊按鈕。'; report({type:'fullscreen-error'}); }
};
document.getElementById('enter-fullscreen').addEventListener('click',() => window.enterProjectionFullscreen());
document.addEventListener('dblclick',() => window.enterProjectionFullscreen());
document.addEventListener('fullscreenchange',() => report({type:'fullscreen',active:!!document.fullscreenElement}));
document.addEventListener('keydown',event => {
  if (event.key.toLowerCase() === 'l' && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); window.enterProjectionFullscreen(); return; }
  if (slideCount && navigationIndex(0,slideCount,event) !== null) {event.preventDefault();report({type:'navigate',key:event.key});}
});
window.addEventListener('message',event => {
  if (!acceptMessage(event,parent,location.origin,session)) return;
  const message = event.data;
  if (!validProjectionSlide(message)) return;
  slideCount = message.count;
  loader.show(message);
});
if (!parent || !session) {
  document.getElementById('enter-fullscreen').disabled = true;
  hint.textContent = '請從講者控制台按「開啟投影」，不要單獨開啟這個頁面。';
} else {
  report({type:'ready'});
}
