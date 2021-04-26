const path = require('path');
const { generate } = require('@genql/cli');

let pr = process.env.VERCEL_GIT_PULL_REQUEST_NUMBER;
let endpoint = `https://bemba-dev-pr-${pr}.herokuapp.com/v1/graphql`;

if (!pr) {
  endpoint = process.env.GRAPHQL_ENDPOINT;
}

generate({
  endpoint,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
  },
  output: path.join(__dirname, '../.generated/genql'),
  sortProperties: true
}).catch(console.error);