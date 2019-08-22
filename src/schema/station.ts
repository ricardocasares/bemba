import { objectType, queryType, idArg, inputObjectType, enumType } from "nexus";
import { radio } from "@/api/radio";
import { geo } from "@/api/geo";

export const Station = objectType({
  name: "Station",
  definition(t) {
    t.string("id");
    t.string("url");
    t.string("name");
    t.string("state");
    t.string("country");
    t.string("test");
    t.string("language");
    // @ts-ignore
    t.list.string("tags", o => o.tags.split(","));
    // @ts-ignore
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
    t.string("name");
    t.list.field("stations", { type: Station });
  },
});

export const Suggestions = objectType({
  name: "Suggestions",
  definition(t) {
    t.field("news", { type: Suggestion });
    t.field("city", { type: Suggestion });
    t.field("country", { type: Suggestion });
    t.field("podcasts", { type: Suggestion });
    t.field("language", { type: Suggestion });
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
        // @ts-ignore
        return radio(`/search`, query, params);
      },
    });

    t.field("suggestions", {
      type: Suggestions,
      async resolve(_, __, { ip }) {
        const { city, country, language } = await geo(ip);

        const citySuggestions = await radio(`/search`, {
          name: city,
        });

        const newsSuggestions = await radio(`/search`, {
          language,
          tag: "news",
        });

        const countrySuggestions = await radio(`/search`, { country });

        const podcastsSuggestions = await radio(`/search`, {
          language,
          tagList: "podcast",
        });

        const languageSuggestions = await radio(`/search`, {
          language,
        });

        return {
          news: {
            name: `News in ${language}`,
            stations: newsSuggestions,
          },
          city: {
            name: `Listen stations from ${city}`,
            stations: citySuggestions,
          },
          country: {
            name: `Stations from ${country}`,
            stations: countrySuggestions,
          },
          podcasts: {
            name: `Podcasts in ${language}`,
            stations: podcastsSuggestions,
          },
          language: {
            name: `${language} language stations`,
            stations: languageSuggestions,
          },
        };
      },
    });
  },
});
