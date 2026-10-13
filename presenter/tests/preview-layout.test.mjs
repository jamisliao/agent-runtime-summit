import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');

test('next preview retains the whole image and shares constrained height with current slide', () => {
  const rule = css.match(/\.upcoming__image\s*\{([^}]+)\}/)?.[1] ?? '';
  assert.match(rule, /width:\s*100%/);
  assert.match(rule, /flex-basis:\s*auto/);
  assert.match(rule, /object-fit:\s*contain/);
  assert.match(rule, /aspect-ratio:\s*1672\s*\/\s*941/);
  assert.match(css,/grid-template-rows:\s*auto minmax\(0,1\.85fr\) auto minmax\(0,1fr\) auto/);
});

test('caption is above the preview at every screen width', () => {
  const rule = css.match(/\.upcoming\s*\{([^}]+)\}/)?.[1] ?? '';
  assert.match(rule, /flex-direction:\s*column/);
  assert.match(rule, /align-items:\s*stretch/);
  assert.match(css.match(/\.upcoming\s*>\s*div\s*\{([^}]+)\}/)?.[1] ?? '', /order:\s*-1/);
  assert.match(css, /\.upcoming\s*>\s*div\s*\{[^}]*min-width:\s*0;[^}]*overflow-wrap:\s*anywhere/);
});
