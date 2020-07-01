// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Modal: function(browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-modal--modal')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-button')
      .click('.d-button')
      .assert.elementPresent('.d-modal')
      .initAccessibility()
      .assert.accessibility('.d-modal', {
        verbose: true
      });

    browser.end();
  }
};
