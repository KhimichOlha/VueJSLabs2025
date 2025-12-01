import { c as defineEventHandler, g as getRouterParam, e as createError } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'consola';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'node:path';

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const posts = [
    {
      title: "\u0429\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0432 Nuxt 4",
      slug: "new-in-nuxt-4",
      description: "\u041E\u0433\u043B\u044F\u0434 \u043D\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438 \u043F\u0430\u043F\u043E\u043A \u0442\u0430 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439 Nuxt 4.",
      content: "Nuxt 4 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u043F\u0440\u043E\u0449\u0435\u043D\u0443 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0430\u043F\u043E\u043A. \u0422\u0435\u043F\u0435\u0440 \u043F\u0430\u043F\u043A\u0430 app \u0441\u0442\u0430\u0454 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u044E..."
    },
    {
      title: "\u0427\u043E\u043C\u0443 Nuxt UI \u0446\u0435 \u043A\u0440\u0443\u0442\u043E",
      slug: "why-nuxt-ui",
      description: "\u042F\u043A \u0448\u0432\u0438\u0434\u043A\u043E \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u0456 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438.",
      content: "Nuxt UI \u043D\u0430\u0434\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0456 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0438..."
    },
    {
      title: "Server Side Rendering (SSR)",
      slug: "ssr-explained",
      description: "\u042F\u043A \u043F\u0440\u0430\u0446\u044E\u0454 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456.",
      content: "SSR \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043F\u043E\u0448\u0443\u043A\u043E\u0432\u0438\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C \u043A\u0440\u0430\u0449\u0435 \u0456\u043D\u0434\u0435\u043A\u0441\u0443\u0432\u0430\u0442\u0438..."
    }
  ];
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: "Article not found"
    });
  }
  return post;
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
