export default {
  compileEnhancements: false,
  extensions: ['ts'],
  require: ['ts-node/register', './test/helpers/setup.js'],
  sources: ['**/*.{js,vue}'],
  snapshotDir: './test/snapshot'
}
