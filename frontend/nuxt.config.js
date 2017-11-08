const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'task-manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'http://fonts.googleapis.com/icon?family=Material+Icons'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.css'}
    ]
  },
  plugins: [
    {src: '~/plugins/materialize.js', ssr: false},
    {src: '~/plugins/modals.js', ssr: false},
    {src: '~/plugins/vueCharts.js', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ee6e73' },
  /*
  ** Build configuration
  */
  router:{
    base: '/'
  },
  build: {
    /*
    ** Run ESLint on save
    */
    plugins: [
      new webpack.ProvidePlugin({

        '$': 'jquery',
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
