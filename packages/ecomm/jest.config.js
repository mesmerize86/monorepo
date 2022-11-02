// const nextJest = require('next/jest')
//
// const createJestConfig = nextJest({
//     // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//     dir: './',
// })

// Add any custom config to be passed to Jest
const customJestConfig = {
    globals: {
        'ts-jest': {
            tsConfig: {
                importHelpers: true
            }
        }
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/components/(.*)$': '<rootDir>/components/$1',

        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: [
        'pages/**/*.{ts,tsx}',
        '!pages/**/*.test.{ts, tsx}',
        '!pages/_app.tsx',
        '!pages/index.tsx',
        '!jest.config.js',
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;