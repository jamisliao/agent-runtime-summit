import importlib.util
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location('presenter_server', ROOT / 'serve.py')
server = None
if (ROOT / 'serve.py').exists():
    server = importlib.util.module_from_spec(SPEC)
    SPEC.loader.exec_module(server)

class Routes(unittest.TestCase):
    def test_routes_are_allowlisted(self):
        self.assertIsNotNone(server, 'server implementation is missing')
        for path in ['/', '/index.html', '/deck.json', '/projection.html', '/core.mjs', '/styles.css']:
            self.assertTrue(server.resolve_asset(path).is_file(), path)
        for page in range(1, server.COUNT + 1):
            asset = server.resolve_asset(f'/slides/slide-{page:02}.png?v=example')
            self.assertTrue(asset.is_file())
            self.assertIn(server.CONFIG['imageDirectory'], str(asset))
        for page in [0, server.COUNT + 1, 60, 61]:
            self.assertIsNone(server.resolve_asset(f'/slides/slide-{page:02}.png'))

    def test_private_files_and_traversal_are_rejected(self):
        self.assertIsNotNone(server, 'server implementation is missing')
        for path in ['/.git/config','/manuscript/complete-manuscript-v3.1.md','/README.md',
                     '/../storyboard/60-slide-storyboard-v13-review.md','/%2e%2e/README.md',
                     '/slides/../manifest.json','/slides/slide-61.png','/serve.py','/tests/core.test.mjs']:
            self.assertIsNone(server.resolve_asset(path), path)

if __name__ == '__main__':
    unittest.main()
