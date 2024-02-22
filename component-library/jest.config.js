const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
        '/cli/',
        '/storybook-static/',
    ],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^SVG/(.*)$': '<rootDir>/__mocks__/fileMock.svg',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^App$': '<rootDir>/app/$1',
        '^Components$': '<rootDir>/app/components/',
        '^i18n$': '<rootDir>/app/i18n/',
        '^App/(.*)$': '<rootDir>/app/$1',
        '^Components/(.*)$': '<rootDir>/app/components/$1',
        '^Containers/(.*)$': '<rootDir>/app/containers/$1',
        '^Layouts/(.*)$': '<rootDir>/app/layouts/$1',
        '^Utils/(.*)$': '<rootDir>/app/utils/$1',
        '^Assets/(.*)$': '<rootDir>/app/assets/$1',
        '^i18n/(.*)$': '<rootDir>/app/i18n/$1',
        '^Jest/(.*)$': '<rootDir>/jest/$1',
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
