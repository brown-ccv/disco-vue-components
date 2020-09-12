// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Buttons: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-banner--banner')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-banner')
      .initAccessibility()
      .assert.accessibility('.d-banner', {
        verbose: true,
      });

    browser.end();
  },
};
