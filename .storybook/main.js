/* eslint no-param-reassign: off, prefer-named-capture-group: off */

const { withA11y } = require('@storybook/addon-a11y');
const { addDecorator } = require('@storybook/react');

addDecorator(withA11y);

module.exports = {
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
  ],
  stories: ['../prototype/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    // Transpile TypeScript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        { loader: require.resolve('ts-loader') },
        { loader: require.resolve('react-docgen-typescript-loader') },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // Support CSS modules
    config.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/',
    ).exclude = /\.module\.css$/;
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    });

    return config;
  },
};
