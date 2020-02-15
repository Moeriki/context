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
