module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.cache/', '<rootDir>/public/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
