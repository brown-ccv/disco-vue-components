// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  beforeEach(browser, done) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-modal--modal')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-button');

    done();
  },
  'Modal not present': function (browser) {
    browser.assert.not.elementPresent('.d-modal');
  },
  'Modal Open and Accessibility check': function (browser) {
    browser
      .click('.d-button')
      .assert.elementPresent('.d-modal')
      .initAccessibility()
      .assert.accessibility('.d-modal', {
        verbose: true,
      });
  },
  'Modal Close Check on header': function (browser) {
    browser
      .click('.d-button')
      .assert.elementPresent('.d-modal')
      .assert.elementPresent('.delete')
      .click('.delete')
      .assert.not.elementPresent('.d-modal');
  },
  'Modal Close Check on footer': function (browser) {
    browser.assert
      .elementPresent('#card')
      .click('#card')
      .assert.elementPresent('.d-modal')
      .assert.elementPresent('#closebutton')
      .click('#closebutton')
      .assert.not.elementPresent('.d-modal');
  },
};
