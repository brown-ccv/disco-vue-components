// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Card: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-card--card')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-card')
      .initAccessibility()
      .assert.accessibility('.d-card', {
        verbose: true,
      });

    browser.end();
  },
};
