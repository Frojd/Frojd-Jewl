const path = require('path');

const aliases = {
    App: path.resolve(__dirname, '../app/'),
    Components: path.resolve(__dirname, '../app/components/'),
    Containers: path.resolve(__dirname, '../app/containers/'),
    Layouts: path.resolve(__dirname, '../app/layouts/'),
    Utils: path.resolve(__dirname, '../app/utils/'),
    Styles: path.resolve(__dirname, '../app/styles/'),
    Assets: path.resolve(__dirname, '../app/assets/'),
    SVG: path.resolve(__dirname, '../app/inline-svg/'),
    i18n: path.resolve(__dirname, '../app/i18n/'),
};
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
        config.resolve.alias = { ...config.resolve.alias, ...aliases };
        config.module.rules = config.module.rules.map((data) => {
            if (/svg/.test(String(data.test))) {
                data.test =
                    /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
                data.exclude = path.resolve(__dirname, '../app/inline-svg/');
            }
            return data;
        });
        config.module.rules.push({
            test: /\.svg$/,
            include: path.resolve(__dirname, '../app/inline-svg/'),
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
