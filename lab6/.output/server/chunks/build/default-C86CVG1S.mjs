import { mergeProps, withCtx, createVNode, renderSlot, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv } from './tv-Du9pqXfS.mjs';
import { _ as _export_sfc, c as useAppConfig } from './server.mjs';
import { _ as _sfc_main$2 } from './Button-BiQAXVSL.mjs';
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
import '@vueuse/core';
import './index-B_dZfzIn.mjs';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-Cxt_hfUA.mjs';

const theme = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const _sfc_main$1 = {
  __name: "UContainer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.container || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$1;
  const _component_UButton = _sfc_main$2;
  _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "min-h-screen flex flex-col" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<header class="py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center"${_scopeId}><h1 class="text-xl font-bold"${_scopeId}>Nuxt Course Blog</h1><nav class="flex gap-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          to: "/",
          variant: "ghost",
          label: "Головна"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          to: "/blog",
          variant: "ghost",
          label: "Блог"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          to: "/about",
          variant: "ghost",
          label: "Про нас"
        }, null, _parent2, _scopeId));
        _push2(`</nav></header><main class="flex-grow py-8"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</main><footer class="py-4 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm"${_scopeId}><p${_scopeId}>© 2025 NuxtJSLabs. Всі права захищені.</p></footer>`);
      } else {
        return [
          createVNode("header", { class: "py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center" }, [
            createVNode("h1", { class: "text-xl font-bold" }, "Nuxt Course Blog"),
            createVNode("nav", { class: "flex gap-4" }, [
              createVNode(_component_UButton, {
                to: "/",
                variant: "ghost",
                label: "Головна"
              }),
              createVNode(_component_UButton, {
                to: "/blog",
                variant: "ghost",
                label: "Блог"
              }),
              createVNode(_component_UButton, {
                to: "/about",
                variant: "ghost",
                label: "Про нас"
              })
            ])
          ]),
          createVNode("main", { class: "flex-grow py-8" }, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createVNode("footer", { class: "py-4 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm" }, [
            createVNode("p", null, "© 2025 NuxtJSLabs. Всі права захищені.")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C86CVG1S.mjs.map
