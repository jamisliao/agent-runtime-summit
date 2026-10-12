export function parseDeck(manuscript, manifest) {
  const sections = [...manuscript.matchAll(/^## (?:Slide )?(\d+)｜(.+)\n([\s\S]*?)(?=^## (?:Slide )?\d+｜|$(?![\s\S]))/gm)];
  if (!Number.isInteger(manifest.count) || manifest.count < 1 || sections.length !== manifest.count || manifest.entries.length !== manifest.count) throw new Error('Unexpected slides count');
  const sectionText = (body, name) => body.match(new RegExp(`^### ${name}\\s*\\n([\\s\\S]*?)(?=^### |^<a id=|^---\\s*$|$(?![\\s\\S]))`, 'm'))?.[1].trim();
  return sections.map((section, index) => {
    const n = Number(section[1]);
    const title = section[2].trim();
    const entry = manifest.entries[index];
    if (n !== index + 1 || entry.n !== n) throw new Error(`Nonconsecutive slide ${n}`);
    if (title !== entry.title) throw new Error(`Slide ${n} title mismatch`);
    if (entry.file !== `slide-${String(n).padStart(2,'0')}.png`) throw new Error(`Invalid image ${n}`);
    const notes = sectionText(section[3], '搭配講稿');
    const transition = sectionText(section[3], '接下一頁');
    const message = sectionText(section[3], '核心訊息');
    if (!notes || !transition || !message) throw new Error(`Slide ${n} missing notes, transition or message`);
    return { n, title, chapter: section[3].match(/^(?:段落|章節)：(.+?)(?:；圖內編號.+)?$/m)?.[1].trim() || '',
      src: `/slides/${entry.file}`, notes, transition, message };
  });
}

export function validProjectionSlide(message) {
  return message?.type === 'slide' && Number.isInteger(message.count) && message.count > 0 &&
    Number.isInteger(message.index) && message.index >= 0 && message.index < message.count &&
    Number.isInteger(message.revision) && message.revision >= 0 &&
    typeof message.src === 'string' && new RegExp(`^/slides/slide-${String(message.index + 1).padStart(2, '0')}\\.png(?:\\?v=[a-f0-9]{64})?$`).test(message.src);
}

export function attachKeyPoints(slides, entries) {
  if (!Array.isArray(entries) || entries.length !== slides.length) throw new Error('Expected key points for every slide');
  return slides.map((slide,index) => {
    const entry = entries[index];
    if (entry?.n !== slide.n || !Array.isArray(entry.points) || entry.points.length < 2 || entry.points.length > 3 ||
      entry.points.some(point => typeof point !== 'string' || !point.trim()) ||
      new Set(entry.points.map(point => point.trim())).size !== entry.points.length ||
      (entry.displayMessage !== undefined && (typeof entry.displayMessage !== 'string' || !entry.displayMessage.trim()))) {
      throw new Error(`Invalid key points for slide ${slide.n}`);
    }
    return {...slide, points:entry.points.map(point => point.trim()), displayMessage:entry.displayMessage || slide.message};
  });
}

export function navigationIndex(index, count, event) {
  if (event.ctrlKey || event.metaKey || event.altKey || event.target?.isContentEditable ||
    ['INPUT','SELECT','TEXTAREA'].includes(event.target?.tagName)) return null;
  if (event.key === ' ' && ['BUTTON','A'].includes(event.target?.tagName)) return null;
  const destinations = {ArrowRight:index+1,PageDown:index+1,' ':index+1,ArrowLeft:index-1,PageUp:index-1,Home:0,End:count-1};
  if (!(event.key in destinations)) return null;
  return Math.max(0,Math.min(count-1,destinations[event.key]));
}

export function pageIndexFromInput(value, count) {
  if (!String(value).trim()) return null;
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? Math.min(n,count)-1 : null;
}

export function acceptMessage(event, popup, origin, session) {
  return !!popup && event.source === popup && event.origin === origin &&
    !!event.data && event.data.session === session && typeof event.data.type === 'string';
}

export function projectionAck(state, message) {
  if (message.revision !== state.revision || message.index !== state.requested) return state;
  if (message.type === 'displayed') return {...state, shown:message.index, status:'shown'};
  if (message.type === 'load-error') return {...state,status:'error'};
  return state;
}

export class SlideLoader {
  constructor({load, render, report}) { Object.assign(this,{load,render,report}); this.latest = 0; }
  async show(message) {
    const ticket = ++this.latest;
    try {
      const image = await this.load(message.src);
      if (ticket !== this.latest) return;
      this.render(image,message);
      this.report({type:'displayed',index:message.index,revision:message.revision});
    } catch {
      if (ticket === this.latest) this.report({type:'load-error',index:message.index,revision:message.revision});
    }
  }
}
