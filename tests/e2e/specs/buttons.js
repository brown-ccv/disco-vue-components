// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Buttons: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-buttons--buttons')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-button')
      .initAccessibility()
      .assert.accessibility('.d-button', {
        verbose: true,
      });

    browser.end();
  },
};
