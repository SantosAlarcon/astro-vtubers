import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_5414f66c.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"vtubers/VTuberDetails/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/vtubers/vtuberdetails","type":"page","pattern":"^\\/vtubers\\/VTuberDetails\\/?$","segments":[[{"content":"vtubers","dynamic":false,"spread":false}],[{"content":"VTuberDetails","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vtubers/VTuberDetails.astro","pathname":"/vtubers/VTuberDetails","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/components/VTuber.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/components/VTuberList.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/pages/vtubers/[vtuber].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/vtubers/[vtuber]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/astro-vtubers/src/pages/vtubers/VTuberDetails.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/vtubers/VTuberDetails@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_a5331880.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_0ef9dcca.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_b58e915e.mjs","\u0000@astro-page:src/pages/vtubers/VTuberDetails@_@astro":"chunks/VTuberDetails_4b7b101f.mjs","\u0000@astro-page:src/pages/vtubers/[vtuber]@_@astro":"chunks/_vtuber__29849488.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.bd7fdfe4.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/VTuberDetails.fc8f13f4.css","/_astro/index.8b969a30.css","/_astro/index.4d9c6cca.css","/_astro/index.00fe8bab.css","/favicon.svg","/fixed_bg.webp","/fixed_bg_dark.webp","/hololive-logo.svg","/hololive-wp.webp","/_astro/hoisted.bd7fdfe4.js","/fonts/Onest-Black.ttf","/fonts/Onest-Bold.ttf","/fonts/Onest-ExtraBold.ttf","/fonts/Onest-Medium.ttf","/fonts/Onest-Regular.ttf","/fonts/Onest-SemiBold.ttf","/pinups/chloe-sakamata.webp","/pinups/choco-yuzuki.webp","/pinups/haato-akai.webp","/pinups/koyori-hakui.webp","/pinups/lamy-yukihana.webp","/pinups/marine-houshou.webp","/pinups/miko-sakura.webp","/pinups/nene-momosuzu.webp","/pinups/noel-shirogane.webp","/pinups/sora-tokino.webp","/thumbs/Akai-Haato_list_thumb.webp","/thumbs/Hakui-Koyori_list_thumb.webp","/thumbs/Houshou-Marine_thumb.webp","/thumbs/Momosuzu-Nene_list_thumb.webp","/thumbs/Sakamata-Chloe_list_thumb.webp","/thumbs/Sakura-Miko_thumb.webp","/thumbs/Shirogane-Noel_thumb.webp","/thumbs/Tokino-Sora_thumb.webp","/thumbs/Yukihana-Lamy_list_thumb.webp","/thumbs/Yuzuki-Choco_list_thumb.webp","/index.html","/vtubers/VTuberDetails/index.html"]});

export { manifest };
