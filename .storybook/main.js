module.exports = {
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
