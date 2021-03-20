import { encode } from "querystring";
import { ApolloServer } from "apollo-server-micro";
import retryFetch from "@vercel/fetch";
import typeDefs from "@/graphql/schema.graphql";

const fetcher = retryFetch(null, { timeout: 5000 });

const ENDPOINT = process.env.RADIO_ENDPOINT;
const STATIONS_SEARCH = `${ENDPOINT}/stations/search?`;
const STATIONS_BY_UUID = `${ENDPOINT}/stations/byuuid?uuids=`;
const searchEndpoint = (args: any) => `${STATIONS_SEARCH}${encode(args)}`;
const byUUIDEndpoint = (args: any) => `${STATIONS_BY_UUID}${args.join(",")}`;

const resolvers = {
  Query: {
    stations: async (_, { search }) =>
      await fetcher(searchEndpoint(search)).then(async (r) => await r.json()),
    stationsByUUID: async (_, { uuids }) =>
      await fetcher(byUUIDEndpoint(uuids)).then(async (r) => await r.json()),
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers,
}).createHandler({
  path: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
