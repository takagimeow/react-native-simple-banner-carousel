// https://kulshekhar.github.io/ts-jest/docs/guides/react-native/
// https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native
module.exports = {
  preset: 'react-native',
  roots: [
    '<rootDir>/src',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-status-bar-height)/)',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
    '**/__tests__/**/*.+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/globalMock.js',
    '@testing-library/jest-native/extend-expect',
  ],
}