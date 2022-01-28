module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: {node: 'current'},
                debug: false,
                useBuiltIns: 'usage',
                corejs: '3.7',
            },
        ],
    ],
};