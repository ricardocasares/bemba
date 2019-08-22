import { ApolloServer } from 'apollo-server-micro';
import { schema } from '@/schema';

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const ip = req.headers['x-ssr-client'] || req.headers['x-forwarded-for'];

    return {
      ip,
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
