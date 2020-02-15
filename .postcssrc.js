const normalize = require('postcss-normalize');
const presetEnv = require('postcss-preset-env');

module.exports = {
  modules: true,
  plugins: [normalize(), presetEnv()],
};
