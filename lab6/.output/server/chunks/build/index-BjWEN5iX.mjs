import { _ as _sfc_main$1 } from './Button-BiQAXVSL.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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
import 'reka-ui';
import './tv-Du9pqXfS.mjs';
import 'tailwind-variants';
import '@vueuse/core';
import './index-B_dZfzIn.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-Cxt_hfUA.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Головна | Nuxt Course Blog",
      description: "Лабораторна робота №6: Вивчення Nuxt 4 та Nuxt UI.",
      ogTitle: "Головна | Nuxt Course Blog",
      ogDescription: "Лабораторна робота №6: Вивчення Nuxt 4 та Nuxt UI."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-3xl font-bold mb-4">Вітаємо на курсі Nuxt 4!</h2><p class="text-lg text-gray-600 mb-6">Це лабораторна робота №6, де ми вивчаємо SSR, API та Nuxt UI.</p>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/blog",
        color: "primary",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Читати блог`);
          } else {
            return [
              createTextVNode("Читати блог")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BjWEN5iX.mjs.map
