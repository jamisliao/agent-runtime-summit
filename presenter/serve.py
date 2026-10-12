"""Local-only, allowlisted slide player. No repository-directory exposure."""
import argparse
import json
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

PLAYER = Path(__file__).resolve().parent
CONFIG = json.loads((PLAYER / 'deck-config.json').read_text(encoding='utf-8'))
IMAGES = (PLAYER.parent / CONFIG['imageDirectory']).resolve()
IMAGES.relative_to((PLAYER.parent / 'images/candidates').resolve())
COUNT = CONFIG['count']
if not isinstance(COUNT, int) or COUNT < 1:
    raise ValueError('Invalid slide count')
PUBLIC = {'index.html', 'projection.html', 'styles.css', 'presenter.mjs', 'projection.mjs', 'core.mjs', 'deck.json'}

def resolve_asset(url):
    path = unquote(urlsplit(url).path)
    if path == '/':
        return PLAYER / 'index.html'
    if path[1:] in PUBLIC and path.startswith('/'):
        return PLAYER / path[1:]
    match = re.fullmatch(r'/slides/slide-(\d{2})\.png', path)
    if match and 1 <= int(match[1]) <= COUNT:
        return IMAGES / f'slide-{match[1]}.png'
    return None

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if resolve_asset(self.path) is None:
            self.send_error(404)
            return
        super().do_GET()

    def do_HEAD(self):
        if resolve_asset(self.path) is None:
            self.send_error(404)
            return
        super().do_HEAD()

    def translate_path(self, path):
        return str(resolve_asset(path))

    def guess_type(self, path):
        if path.endswith('.mjs'):
            return 'text/javascript'
        return super().guess_type(path)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'")
        super().end_headers()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8767)
    args = parser.parse_args()
    if not (PLAYER / 'deck.json').is_file():
        parser.error('Run node presenter/build-deck.mjs first')
    with ThreadingHTTPServer(('127.0.0.1', args.port), Handler) as server:
        print(f'Presenter: http://127.0.0.1:{args.port}/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
