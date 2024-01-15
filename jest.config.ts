module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    reporters: [
      'default',
      [
        'jest-junit',
        { outputDirectory: './test-results', outputName: 'junit.xml' }
      ]
    ]
  };