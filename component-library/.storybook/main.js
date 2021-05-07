const path = require('path');

module.exports = {
    stories: [
        '../app/_styleguide/**/*.stories.js',
        '../app/components/**/*.stories.js',
        '../app/containers/**/*.stories.js',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
    ],

    webpackFinal: async (config, { configType }) => {

        config.resolve.modules = [
            ...config.resolve.modules,
            path.resolve(__dirname, '../app'),
        ];
        
        config.module.rules = config.module.rules.map(data => {
            if (/svg\|/.test( String( data.test ) )) {
                data.test = /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
                data.exclude = path.resolve(__dirname, '../app/svg');
            }
            return data;
        });

        config.module.rules.push({
            test: /\.svg$/,
            include: path.resolve(__dirname, '../app/svg'),
            use: [{
                loader: 'react-svg-loader',
                options: {
                    svgo: {
                        plugins: [{
                            removeViewBox: false,
                        }],
                    }
                }
            }]
        });

        // CSS modules for app
        config.module.rules.push({
            test: /\.scss$/,
            include: path.resolve(__dirname, '../app/'),
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: true,
                        modules: {
                            localIdentName: '[name]__[local]-[hash:base64:5]',
                        },
                    }
                },
                { loader: 'sass-loader' },
            ]
        });

        // Regular css styling for storybook styleguide
        config.module.rules.push({
            test: /\.scss$/,
            include: path.resolve(__dirname, '.'),
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: true,
                        modules: false,
                    }
                },
                { loader: 'sass-loader' },
            ]
        });

        config.resolve.alias = {
            Layouts: path.resolve(__dirname, '../app/layouts/'),
            Containers: path.resolve(__dirname, '../app/containers/'),
            Components: path.resolve(__dirname, '../app/components/'),
            i18n: path.resolve(__dirname, '../app/i18n'),
            Styles: path.resolve(__dirname, '../app/styles'),
            Utils: path.resolve(__dirname, '../app/utils'),
        };

        return config;
    },
};