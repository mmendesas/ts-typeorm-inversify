import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
  collectCoverage: true,
  displayName: 'unit-tests',
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      { tsconfig: path.resolve(__dirname, 'tsconfig.json') },
    ],
  },
};

export default config;
