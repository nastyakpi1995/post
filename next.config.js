require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
  },
};
