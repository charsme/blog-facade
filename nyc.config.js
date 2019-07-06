module.exports = {
  perFile: true,
  lines: 0,
  statements: 0,
  functions: 0,
  branches: 0,
  checkCoverage: true,
  include: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  exclude: ['node_modules'],
  extension: ['.js', '.ts', '.vue'],
  reporter: ['lcov', 'text'],
  cache: true,
  all: true,
  showProcessTree: true,
  sourcemap: true
}
