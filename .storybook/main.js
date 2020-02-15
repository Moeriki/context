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
    config.module.rules.push({
      test: /\.(ts|tsx)$/, // eslint-disable-line prefer-named-capture-group
      use: [
        { loader: require.resolve('ts-loader') },
        { loader: require.resolve('react-docgen-typescript-loader') },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
