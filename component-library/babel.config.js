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
const plugins = [];

module.exports = {
    presets,
    plugins,
};
