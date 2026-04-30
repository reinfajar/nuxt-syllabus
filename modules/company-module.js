import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'company-module',
    configKey: 'companyModule'
  },
  setup(_, nuxt) {
    // Minimal module example:
    // Add a default title template globally.
    nuxt.options.app.head = nuxt.options.app.head || {}
    nuxt.options.app.head.titleTemplate = '%s - Nuxt Syllabus Company'
  }
})
