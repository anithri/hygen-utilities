module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: "src.+/__tests__/.*.spec.ts",
  transform: {
    "^.+\\.tsx?$": 'ts-jest',
  },
}
