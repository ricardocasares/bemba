require("dotenv").config();

module.exports = {
  target: "serverless",
  env: {
    BEMBA_API_ENDPOINT: process.env.BEMBA_API_ENDPOINT
  }
};
