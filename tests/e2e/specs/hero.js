// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Hero: function(browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-hero--hero')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-hero')
      .initAccessibility()
      .assert.accessibility('.d-hero', {
        verbose: true
      });

    browser.end();
  }
};
