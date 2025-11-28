export default defineEventHandler((event) => {

  const posts = [
    {
      title: 'Що нового в Nuxt 4',
      slug: 'new-in-nuxt-4',
      description: 'Огляд нової структури папок та можливостей Nuxt 4.',
      content: 'Nuxt 4 приносить спрощену структуру папок...'
    },
    {
      title: 'Чому Nuxt UI це круто',
      slug: 'why-nuxt-ui',
      description: 'Як швидко створювати красиві інтерфейси за допомогою Tailwind.',
      content: 'Nuxt UI надає готові компоненти на базі Headless UI...'
    },
    {
      title: 'Server Side Rendering (SSR)',
      slug: 'ssr-explained',
      description: 'Як працює рендеринг на сервері та чому це важливо для SEO.',
      content: 'SSR дозволяє пошуковим роботам краще індексувати ваш сайт...'
    }
  ]

  return posts
})