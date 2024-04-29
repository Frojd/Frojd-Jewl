const path = require('path');

module.exports = {
    staticDirs: ['./assets'],

    stories: [
        {
            directory: '../app/_styleguide',
            titlePrefix: 'Styleguide',
        },
        {
            directory: '../app/components',
            titlePrefix: 'Components',
        },
        {
            directory: '../app/containers',
            titlePrefix: 'Containers',
        },
    ],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@whitespace/storybook-addon-html',
    ],

    features: {
        babelModeV7: true,
    },

    framework: {
        name: '@storybook/nextjs',
        options: {},
    },

    docs: {
        autodocs: true,
    },

    babel: async (options) => {
        options.presets = ['next/babel'];
        return {
            ...options,
        };
    },

    webpackFinal: async (config, { configType }) => {
        config.module.rules = config.module.rules.map((data) => {
            if (/svg/.test(String(data.test))) {
                data.test =
                    /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
                data.exclude = path.resolve(
                    __dirname,
                    '../app/components/Icon/inline-svg/'
                );
            }
            return data;
        });
        config.module.rules.push({
            test: /\.svg$/,
            include: path.resolve(
                __dirname,
                '../app/components/Icon/inline-svg/'
            ),
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
