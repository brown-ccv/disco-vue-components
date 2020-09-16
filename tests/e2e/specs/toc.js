// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Buttons: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/elements-table-of-contents--table-of-contents')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.d-toc-container')
      .assert.elementPresent('.d-toc')
      .assert.elementPresent('.d-toc-content')
      .assert.elementPresent('.d-toc-start')
      .assert.elementPresent('.d-toc-end')
      .initAccessibility()
      .assert.accessibility('.d-toc-container', {
        verbose: true,
      });

    browser.end();
  },
};
