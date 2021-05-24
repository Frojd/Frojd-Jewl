/* global module process */
const presets = [
    [
        '@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: 3.7,
        },
    ],
    '@babel/preset-react',
];
const plugins = [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
];

module.exports = {
    presets,
    plugins,
};
