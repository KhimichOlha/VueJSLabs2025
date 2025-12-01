import { a as _sfc_main$5, _ as _sfc_main$4 } from './Button-BiQAXVSL.mjs';
import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './Alert-CJswVd-3.mjs';
import { _ as _sfc_main$3 } from './Card-44e7shFl.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './server.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './tv-Du9pqXfS.mjs';
import 'tailwind-variants';
import '@vueuse/core';
import './index-B_dZfzIn.mjs';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-Cxt_hfUA.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/posts", "$n6r2E9lutY")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$5;
      const _component_USkeleton = _sfc_main$1;
      const _component_UAlert = _sfc_main$2;
      const _component_UCard = _sfc_main$3;
      const _component_UButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto" }, _attrs))}><h2 class="text-3xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-newspaper" }, null, _parent));
      _push(` Наші статті </h2>`);
      if (unref(status) === "pending") {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(ssrRenderComponent(_component_USkeleton, {
            class: "h-32 w-full",
            key: i
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(ssrRenderComponent(_component_UAlert, {
          icon: "i-heroicons-exclamation-triangle",
          color: "red",
          variant: "soft",
          title: "Помилка завантаження",
          description: unref(error).message
        }, null, _parent));
      } else {
        _push(`<div class="grid gap-6"><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: post.slug
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(post.title)}</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "text-xl font-semibold" }, toDisplayString(post.title), 1)
                ];
              }
            }),
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  to: `/blog/${post.slug}`,
                  color: "primary",
                  variant: "ghost",
                  label: "Читати далі",
                  "trailing-icon": "i-heroicons-arrow-right"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    to: `/blog/${post.slug}`,
                    color: "primary",
                    variant: "ghost",
                    label: "Читати далі",
                    "trailing-icon": "i-heroicons-arrow-right"
                  }, null, 8, ["to"])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="text-gray-600 dark:text-gray-300 mb-4"${_scopeId}>${ssrInterpolate(post.description)}</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-gray-600 dark:text-gray-300 mb-4" }, toDisplayString(post.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Cr621T2G.mjs.map
