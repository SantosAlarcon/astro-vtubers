import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_a5331880.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_5414f66c.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_0ef9dcca.mjs');
const _page1  = () => import('./chunks/index_b58e915e.mjs');
const _page2  = () => import('./chunks/VTuberDetails_4b7b101f.mjs');
const _page3  = () => import('./chunks/_vtuber__29849488.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/vtubers/VTuberDetails.astro", _page2],["src/pages/vtubers/[vtuber].astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
