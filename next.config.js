const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

module.exports = withPlugins([
  withCss,
  [
    withLess,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
]);
// module.exports = withCss({});
