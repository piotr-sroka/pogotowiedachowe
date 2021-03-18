export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PogotowieDachowe.pl',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/scroll-to.js', ssr: false },
    { src: '~/plugins/scrollbar.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBaIlPUMrqFwfoje0b6rxZpivHIVsgUk9E',
          authDomain: 'pogotowiedachowe-com.firebaseapp.com',
          databaseURL:
            'https://pogotowiedachowe-com-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'pogotowiedachowe-com',
          storageBucket: 'pogotowiedachowe-com.appspot.com',
          messagingSenderId: '603453300705',
          appId: '1:603453300705:web:8d2c6c9852e603d505fca0',
          measurementId: 'G-LQN10971RH',
          onFirebaseHosting: true,
        },
        services: {
          database: {
            ssr: true,
          },
          firestore: {
            ssr: true,
          },
          auth: {
            ssr: true,
          },
        },
      },
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          }
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
