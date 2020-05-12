const { API_URL, HOST_ENV } = process.env;

module.exports = {
  env: {
    API_URL,
    HOST_ENV: HOST_ENV || 'development',
  },
  publicRuntimeConfig: { MODE: HOST_ENV || 'development', API_URL },
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};
