module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: 'src/(__tests__/)?.*\\.spec\\.ts$',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended'],
}
//Case.snake('Foo bar!')   -> 'foo_bar'
// Case.pascal('foo.bar')   -> 'FooBar'
// Case.camel('foo, bar')   -> 'fooBar'
// Case.kebab('Foo? Bar.')  -> 'foo-bar'
// Case.header('fooBar=')   -> 'Foo-Bar'
// Case.constant('Foo-Bar') -> 'FOO_BAR'