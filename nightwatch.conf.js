require('@babel/register')

module.exports = {
  src_folders: ['test/e2e'],
  output_folder: '.e2e_output',

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox']
        },
        loggingPrefs: { driver: 'INFO', server: 'OFF', browser: 'INFO' }
      }
    }
  }
}
