// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Buttons: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-footer--footer')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-footer')
      .initAccessibility()
      .assert.accessibility('.d-footer', {
        verbose: true,
      });

    browser.end();
  },
};
