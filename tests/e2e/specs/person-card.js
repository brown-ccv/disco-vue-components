// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Card: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-cards-person-card--person-card')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-card')
      .assert.elementPresent('.d-person-card')

      .initAccessibility()
      .assert.accessibility('.d-person-card', {
        verbose: true,
      });

    browser.end();
  },
};
