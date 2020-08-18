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
      .assert.not.elementPresent('.d-modal')
      .click('.d-button')
      .assert.elementPresent('.d-modal')
      .initAccessibility()
      .assert.accessibility('.d-modal', {
        verbose: true
      })
      .assert.elementPresent('.delete')
      .click('.delete')
      .assert.not.elementPresent('.d-modal')
      .assert.elementPresent('.is-info')
      .click('.is-info')
      .assert.elementPresent('.d-modal')
      .assert.elementPresent('#closebutton')
      .click('#closebutton')
      .assert.not.elementPresent('.d-modal');

    browser.end();
  }
};
