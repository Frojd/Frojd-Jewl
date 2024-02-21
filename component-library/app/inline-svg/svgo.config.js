module.exports = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                    // {
                    //     name: 'removeAttrs',
                    //     params: { attrs: '(fill|fill-rule|stroke|opacity|style)' },
                    // },
                },
            }
        },
    ],
};