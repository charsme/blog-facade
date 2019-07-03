export default {
  compileEnhancements: false,
  concurrency: 5,
  extensions: ['ts'],
  failFast: true,
  require: ['ts-node/register', './test/helpers/setup.js']
}
