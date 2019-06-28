require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')

window.Date = global.Date = Date

Vue.config.productionTip = false

hooks('vue')
  .plugin('vue')
  .push()
hooks(['vue', 'js', 'ts'])
  .plugin('babel')
  .push()
