import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['src/utils/Database.ts'],
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
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

export default config;
