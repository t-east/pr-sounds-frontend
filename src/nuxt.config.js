export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sounds App',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    apiURL: process.env.API_URL || 'http://localhost:3333',
    loginURL: process.env.LOGIN_URL || ''
  },
  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto.js',
    { src: '~/plugins/chart-radar.js', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/vue-star-rating.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],

  axios: {
    proxy: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://typescript.nuxtjs.org/guide/lint/
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  auth: {
    redirect: {
      logout: '/', // ログアウト時のリダイレクトURL
      callback: false, // Oauth認証等で必要となる コールバックルート
      home: false // ログイン後のリダイレクトURL
    },
    strategies: {
    }
  }
}
