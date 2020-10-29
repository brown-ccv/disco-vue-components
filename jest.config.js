module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/*.{js,vue}',
    '**/components/logos/*.{js,vue}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['html', 'text-summary'],
  coverageDirectory: 'coverage',
  setupFiles: ['jest-canvas-mock'],
};
