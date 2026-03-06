import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
        {
            directory: '../app/layouts',
            titlePrefix: 'Layouts',
        },
    ],

    addons: [
        '@storybook/addon-a11y',
        '@whitespace/storybook-addon-html',
        '@storybook/addon-links',
    ],

    framework: {
        name: '@storybook/nextjs',
        options: {},
    },

    docs: {
        autodocs: true,
    },

    webpackFinal: async (config) => {
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
