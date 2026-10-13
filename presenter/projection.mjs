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
    if (document.fullscreenElement && !screen) {
      report({type:'fullscreen',active:true});
      return;
    }
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen(screen ? {screen} : undefined);
    } else if (screen) {
      await document.documentElement.requestFullscreen({screen});
    }
  } catch { hint.textContent = '全螢幕未成功。請在講者控制台點「投影全螢幕」，或在這個視窗按 L。'; report({type:'fullscreen-error'}); }
};
document.addEventListener('dblclick',() => window.enterProjectionFullscreen());
document.addEventListener('fullscreenchange',() => report({type:'fullscreen',active:!!document.fullscreenElement}));
document.addEventListener('keydown',event => {
  if (event.key.toLowerCase() === 'l' && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); window.enterProjectionFullscreen(); return; }
  if (slideCount && navigationIndex(0,slideCount,event) !== null) {event.preventDefault();report({type:'navigate',key:event.key});}
});
window.addEventListener('message',event => {
  if (!acceptMessage(event,parent,location.origin,session)) return;
  const message = event.data;
  if (message.type === 'enter-fullscreen') {
    // Must run immediately while the sender's delegated click is valid.
    window.enterProjectionFullscreen();
    return;
  }
  if (!validProjectionSlide(message)) return;
  slideCount = message.count;
  loader.show(message);
});
if (!parent || !session) {
  hint.textContent = '請從講者控制台按「開啟投影」，不要單獨開啟這個頁面。';
} else {
  report({type:'ready'});
}
