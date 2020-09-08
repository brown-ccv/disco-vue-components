// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Expandable: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-expandables--expandables')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-expandable')
      .assert.elementPresent('.d-expandable-header')
      .initAccessibility()
      .assert.accessibility('.d-expandable', {
        verbose: true,
      });

    browser.end();
  },
};
