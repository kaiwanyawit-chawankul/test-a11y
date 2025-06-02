// jest.config.js
module.exports = {
  // The root of your source code
  roots: ['<rootDir>/src'],

  // Test file extensions
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js', // Exclude the entry point
    '!src/serviceWorker.js', // Exclude service worker
    '!src/reportWebVitals.js', // Exclude web vitals
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Setup files to run before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};