module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios|other-package-you-use).+\\.js$',
    ],
  };
  