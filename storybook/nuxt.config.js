import module from '..'

export default {
  components: true,
  buildModules: [module, '@nuxtjs/tailwindcss'],
  modules: [
    'nuxt-i18n'
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {},
        fr: {}
      }
    }
  }
}
