const alias = {
    '^SVG/(.*)$': '<rootDir>/jest/__mocks__/fileMock.svg',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/fileMock.js',
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
};

module.exports = {
    testEnvironment: 'jsdom',
    "setupFilesAfterEnv": ["./jest/setup.js"],
    "testMatch": [
        "**/?(*.)(test).js?(x)"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/storybook-static/",
        "/app/svg/",
        "/cli/",
    ],
    moduleNameMapper: alias,
};
