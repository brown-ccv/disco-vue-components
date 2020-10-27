// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  Dashboard: function (browser) {
    let page = browser.page.page();

    page
      .navigate('/?path=/story/visualization-chart-container--chart-container')
      .waitForElementVisible('@canvas')
      .assert.elementPresent('@iframe');

    browser
      .frame('storybook-preview-iframe')
      .assert.elementPresent('#root')
      .assert.elementPresent('.vega-visualization')
      .initAccessibility()
      .assert.accessibility('.dashboard-section', {
        verbose: true,
      });

    browser.end();
  },
};
