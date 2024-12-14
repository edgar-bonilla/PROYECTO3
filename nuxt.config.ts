// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  css: [
    'bootstrap/dist/css/bootstrap.css'  // Agregar Bootstrap CSS globalmente
  ],

  build: {
    transpile: ['bootstrap']  // Asegurarse de que Bootstrap sea procesado correctamente
  },

  compatibilityDate: '2024-12-13',
})