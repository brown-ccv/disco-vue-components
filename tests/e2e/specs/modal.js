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
  'Modal is present': function (browser) {
    browser.assert.elementPresent('.d-dialog');
  },
  'Modal Accessibility check': function (browser) {
    browser.initAccessibility().assert.accessibility('.d-dialog', {
      verbose: true,
    });
  },
  'Modal Close Check on header': function (browser) {
    browser.assert
      .elementPresent('.d-button-delete')
      .click('.d-button-delete')
      .assert.not.elementPresent('.d-dialog');
  },
  'Modal Close Check on footer': function (browser) {
    browser.assert
      .elementPresent('#closebutton')
      .click('#closebutton')
      .assert.not.elementPresent('.d-dialog');
  },
};
