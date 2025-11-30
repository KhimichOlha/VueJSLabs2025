export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],


  site: {
    url: 'http://localhost:3000', 
    name: 'Nuxt Course Blog'
  },

  robots: {
    disallow: ['/api/*'], 
    allow: '/'            
  }
})