const withSass = require('@zeit/next-sass');

module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]__[hash:base64:5]',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
