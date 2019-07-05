const hooks = require('require-extension-hooks')

if (process.env.TEST === 'unit') {
  require('jsdom-global')()
  require('browser-env')
  const Vue = require('vue')
  Vue.config.productionTip = false
  // https://github.com/nuxt/create-nuxt-app/issues/180#issuecomment-463069941
  window.Date = global.Date = Date
}

if (process.env.TEST === 'e2e') {
  const Vue = require('vue')
  Vue.config.productionTip = false
}

hooks('vue')
  .plugin('vue')
  .push()
hooks(['vue', 'js', 'ts'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel', {
    presets: ['@babel/env'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import'
    ]
  })
  .push()
