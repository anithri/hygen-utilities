module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: 'src/(__tests__/)?.*\\.spec\\.ts$',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended'],
}
