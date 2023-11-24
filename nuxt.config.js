export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clinic_assist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    wampUrl: process.env.WAMP_URL,
  },

  loading: {
    color: '#0460A9',
    height: '5px',
  },

  styleResources: {
    sass: ['@/assets/styles/_variables.sass'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/_variables.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    // https://github.com/nuxt/components/issues/164
    loader: true,
    dirs: [
      {
        path: '@/components/ui/',
        prefix: 'ui',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@qapsula-frontend/qapsula-ui/nuxt-module',
    '@qapsula-frontend/qapsula-any/nuxt-module',
    // '@qapsula-frontend/qapsula-wamp/nuxt-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/proxy',
    '@nuxtjs/router-extras',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-auth-server-init',
    '@nuxtjs/auth-next',
    'nuxt-vue-multiselect',
  ],

  i18n: {
    lazy: true,
    defaultLocale: 'ru',
    langDir: 'lang/',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru.json',
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    progress: false,
    baseURL: process.env.API_URL,
  },

  proxy: {
    '/files': {
      target: process.env.FILES_URL,
    },
  },

  auth: {
    strategies: {
      local: {
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: '/auth',
            method: 'get',
          },
          user: {
            url: '/me',
            method: 'get',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/sign-in',
      logout: '/',
      home: '/consultations',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Консилиум по ревматологии',
      ogDescription: 'НИИ ревматологии ФГБОУ ВО СЗГМУ им. И.И. Мечникова',
      description: 'НИИ ревматологии ФГБОУ ВО СЗГМУ им. И.И. Мечникова',
      theme_color: '#0460A9',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },

  server: {
    port: process.env.PORT || 3000,
  },
}
