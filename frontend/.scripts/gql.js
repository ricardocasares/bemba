const path = require('path');
const { generate } = require('@genql/cli');

console.log(`Generating client for ${process.env.GRAPHQL_ENDPOINT} ...`);

generate({
  endpoint: process.env.GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
  },
  output: path.join(__dirname, '../.generated/genql'),
  sortProperties: true,
})
  .then(() => console.log(`OK!`))
  .catch(console.error);