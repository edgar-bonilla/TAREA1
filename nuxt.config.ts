export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image"],

  routeRules: {
    '/': { prerender: true }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/markdown-styles.css',
  ],

  compatibilityDate: '2024-08-17',
})