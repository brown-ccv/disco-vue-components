// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Navbar: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-navigation-bar--navigation-bar')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.navbar')
      .initAccessibility()
      .assert.accessibility('.navbar', {
        verbose: true,
      });

    browser.end();
  },
};
