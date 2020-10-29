import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    stations(search: StationSearchInput): [Station!]!
  }

  enum StationOrder {
    NAME
    VOTES
  }

  type Station {
    name: String!
    url: String!
    votes: Int!
    favicon: String!
    homepage: String!
    language: String!
    country: String!
    stationuuid: String!
  }

  input StationSearchInput {
    name: String
    limit: Int = 10
    reverse: Boolean = true
    order: StationOrder = VOTES
    country: String
    language: String
  }
`;
