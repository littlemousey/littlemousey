import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      /* Facebook Open Graph */
      {
        property: 'og:title',
        content: 'Little mousey'
      },
      {
        property: 'og:description',
        content: 'Where little mousey lives'
      },
      {
        property: 'og:image',
        content: 'https://i.postimg.cc/LXS82y95/littlemousey-avatar.png'
      },
      /* Twitter card meta tags */
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'http://littlemousey.com/' },
      { name: 'twitter:title', content: 'Little mousey' },
      { name: 'twitter:description', content: 'Where little mousey lives' },
      {
        name: 'twitter:image',
        content: 'https://i.postimg.cc/LXS82y95/littlemousey-avatar.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@/node_modules/leaflet.markercluster/dist/MarkerCluster.css',
    '@/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/leaflet.js', ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub', 'faLinkedin', 'faMedium']
          }
        ]
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://littlemousey.com',
    routes: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.blue.darken4,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    },
    treeShake: true
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    extend(config, ctx) {}
  },
  generate: {
    devtools: true
  }
}
