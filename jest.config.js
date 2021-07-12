module.exports = {
  verbose: true,
  moduleDirectories: ['src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '@Common/(.*)': '<rootDir>/src/common/$1',
    '@Config/(.*)': '<rootDir>/src/application/config/$1',
    '@Application/(.*)': '<rootDir>/src/application/$1',
    '@Base/(.*)': '<rootDir>/src/$1',
    '@Helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@Styles/(.*)': '<rootDir>/src/common/styles/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/helpers/fileTransformer.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/helpers/setupTests.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  testMatch: ['<rootDir>/src/**/(*.)+(spec|test).js?(x)'],
};
