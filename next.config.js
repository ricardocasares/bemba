require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    GEOIP_API_KEY: process.env.GEOIP_API_KEY,
    GEOIP_API_ENDPOINT: process.env.GEOIP_API_ENDPOINT,
    BEMBA_API_ENDPOINT: process.env.BEMBA_API_ENDPOINT,
  },
};
