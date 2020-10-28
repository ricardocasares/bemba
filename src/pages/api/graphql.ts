import { encode } from "querystring";
import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/lib/graphql/types";

const ENDPOINT = process.env.RADIO_ENDPOINT;
const STATION_SEARCH = `${ENDPOINT}/stations/search?`;
const searchEndpoint = (args: any) => `${STATION_SEARCH}${encode(args)}`;

const resolvers = {
  Query: {
    stations: async (_, { search }) =>
      fetch(searchEndpoint(search)).then((r) => r.json()),
  },
};

export default new ApolloServer({ typeDefs, resolvers }).createHandler({
  path: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
