export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'planet-learn',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/styles/customBootstrap.scss',
    '~/assets/styles/main.css',
  ],

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
  router: {
    // Run the middleware/user-agent.js on every page
    middleware: 'abtest'
  },

  plugins: [
    {src:'~/plugins/bootstrap.js', mode: 'client'}
  ],

  // middleware: 'abtest',

  components: true,

}
