require("dotenv").config();

module.exports = {
  target: "serverless",
  env: {
    IP_STACK_API_KEY: process.env.IP_STACK_API_KEY,
    BEMBA_API_ENDPOINT: process.env.BEMBA_API_ENDPOINT
  }
};