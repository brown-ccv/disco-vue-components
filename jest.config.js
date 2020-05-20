module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ['**/components/*.{js,vue}', '!**/node_modules/**'],
  coverageReporters: ['html', 'text-summary'],
  coverageDirectory: 'coverage'
};
