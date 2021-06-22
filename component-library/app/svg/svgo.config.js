const { extendDefaultPlugins } = require('svgo');

module.exports = {
    plugins: extendDefaultPlugins([
        {
            name: 'removeViewBox',
            active: false
        },
        {
            name: 'removeAttrs',
            params: { attrs: '(fill|fill-rule|stroke|opacity|style)' },
        },
    ]),
};