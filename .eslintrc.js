module.exports = {
  root: true,
  extends: ['noise'],
  overrides: [
    {
      files: ['prototype/src/**'],
      extends: ['noise-browser'],
    },
    {
      files: ['**.{jsx,tsx}'],
      extends: ['noise-react'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**.{ts,tsx}'],
      extends: ['noise-ts'],
    },
    {
      files: ['.storybook/**', '*.js', '**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
