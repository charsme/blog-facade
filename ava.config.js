export default {
  compileEnhancements: false,
  extensions: ['ts'],
  require: ['ts-node/register', './test/_ava_setup.js'],
  sources: ['**/*.{js,vue}'],
  snapshotDir: './test/snapshot'
}
