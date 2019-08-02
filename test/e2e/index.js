module.exports = {
  'Demo test Google': browser => {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('div.site')
      .end()
  }
}
