const path = require('path');

const aliases = {
  App: path.resolve(__dirname, '../app/'),
  Components: path.resolve(__dirname, '../app/components/'),
  Containers: path.resolve(__dirname, '../app/containers/'),
  Layouts: path.resolve(__dirname, '../app/layouts/'),
  Utils: path.resolve(__dirname, '../app/utils/'),
  Styles: path.resolve(__dirname, '../app/styles/'),
  Assets: path.resolve(__dirname, '../app/assets/'),
  SVG: path.resolve(__dirname, '../app/svg/'),
  i18n: path.resolve(__dirname, '../app/i18n/')
};
module.exports = {
  features: {
    storyStoreV7: true
  },
  staticDirs: ['./assets'],
  stories: [{
    directory: '../app/_styleguide',
    titlePrefix: 'Styleguide'
  }, {
    directory: '../app/components',
    titlePrefix: 'Components'
  }, {
    directory: '../app/containers',
    titlePrefix: 'Containers'
  }],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
  webpackFinal: async (config, {
    configType
  }) => {
    config.resolve.alias = { ...config.resolve.alias,
      ...aliases
    };
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test(String(data.test))) {
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
              removeViewBox: false
            }]
          }
        }
      }]
    }); // CSS modules for app

    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '../app/'),
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          modules: {
            localIdentName: '[folder]__[local]' // This should be changed when used for production
          }
        }
      }, {
        loader: 'sass-loader'
      }]
    }); // Regular css styling for storybook styleguide

    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '.'),
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          modules: false
        }
      }, {
        loader: 'sass-loader'
      }]
    });
    return config;
  },
  framework: '@storybook/react'
};