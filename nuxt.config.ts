// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global CSS file loaded in every page/component.
  css: ['~/assets/css/main.css'],

  // Register one simple custom module to show how modules work.
  modules: ['~/modules/company-module']
})
