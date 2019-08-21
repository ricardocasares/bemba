import { objectType, queryType, idArg, inputObjectType, enumType } from "nexus";
import { radio } from "@/api/radio";

export const Station = objectType({
  name: "Station",
  definition(t) {
    t.string("id");
    t.string("url");
    t.string("name");
    t.string("state");
    t.string("country");
    t.string("language");
    t.list.string("tags", o => o.tags.split(","));
    t.int("votes", ({ votes = 0 }) => parseInt(votes, 10));
  },
});

export const FilterInput = inputObjectType({
  name: "QueryInput",
  definition(t) {
    t.string("tag");
    t.string("name");
    t.string("state");
    t.string("country");
    t.string("language");
  },
});

export const OrderEnum = enumType({
  name: "OrderEnum",
  members: {
    NAME: "name",
    TAGS: "tags",
    VOTES: "votes",
    STATE: "state",
    COUNTRY: "country",
    LANGUAGE: "language",
  },
});

export const ParamsInput = inputObjectType({
  name: "ParamsInput",
  definition(t) {
    t.int("limit");
    t.int("offset");
    t.boolean("reverse");
    t.field("order", {
      type: OrderEnum,
    });
  },
});

export const Suggestion = objectType({
  name: "Suggestion",
  definition(t) {
    t.list.field("stations", { type: Station });
  },
});

export const Suggestions = objectType({
  name: "Suggestions",
  definition(t) {
    t.field("tags", { type: Suggestion });
    t.field("state", { type: Suggestion });
    t.field("country", { type: Suggestion });
  },
});

export const Query = queryType({
  definition(t) {
    t.field("station", {
      type: Station,
      args: {
        id: idArg({ required: true }),
      },
      async resolve(_, { id }) {
        return radio(`/byid/${id}`).then(([station]) => station);
      },
    });

    t.list.field("stations", {
      type: Station,
      args: {
        query: FilterInput,
        params: ParamsInput,
      },
      async resolve(_, { query, params }) {
        return radio(`/search`, query, params);
      },
    });

    t.field("suggestions", {
      type: Suggestions,
      async resolve() {
        const tags = await radio(`/search`, { tag: "tango" });
        const state = await radio(`/search`, { tag: "tango" });
        const country = await radio(`/search`, { tag: "tango" });
        return {
          tags: { stations: tags },
          state: { stations: state },
          country: { stations: country },
        };
      },
    });
  },
});
