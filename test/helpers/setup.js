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
  .plugin('babel')
  .push()
