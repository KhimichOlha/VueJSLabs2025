import { _ as _sfc_main$1 } from './Card-44e7shFl.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
import 'reka-ui';
import './tv-Du9pqXfS.mjs';
import 'tailwind-variants';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'node:path';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Про нас | Nuxt Course Blog",
      description: "Інформація про автора та навчальний курс.",
      ogTitle: "Про нас | Nuxt Course Blog",
      ogDescription: "Інформація про автора та навчальний курс."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold mb-4">Про цей проєкт</h2>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Цей сайт створено в рамках навчання. Ми використовуємо:</p><ul class="list-disc list-inside mt-2 ml-4"${_scopeId}><li${_scopeId}>Nuxt 4 (Future Mode)</li><li${_scopeId}>Nuxt UI</li><li${_scopeId}>Server API (Nitro)</li></ul>`);
          } else {
            return [
              createVNode("p", null, "Цей сайт створено в рамках навчання. Ми використовуємо:"),
              createVNode("ul", { class: "list-disc list-inside mt-2 ml-4" }, [
                createVNode("li", null, "Nuxt 4 (Future Mode)"),
                createVNode("li", null, "Nuxt UI"),
                createVNode("li", null, "Server API (Nitro)")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-D357Tgfn.mjs.map
