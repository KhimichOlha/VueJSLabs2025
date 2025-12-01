export default defineEventHandler((event) => {

  const slug = getRouterParam(event, 'slug')

  const posts = [
    {
      title: 'Що нового в Nuxt 4',
      slug: 'new-in-nuxt-4',
      description: 'Огляд нової структури папок та можливостей Nuxt 4.',
      content: 'Nuxt 4 приносить спрощену структуру папок. Тепер папка app стає головною...'
    },
    {
      title: 'Чому Nuxt UI це круто',
      slug: 'why-nuxt-ui',
      description: 'Як швидко створювати красиві інтерфейси.',
      content: 'Nuxt UI надає готові компоненти...'
    },
    {
      title: 'Server Side Rendering (SSR)',
      slug: 'ssr-explained',
      description: 'Як працює рендеринг на сервері.',
      content: 'SSR дозволяє пошуковим роботам краще індексувати...'
    }
  ]

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found'
    })
  }

  return post
})
