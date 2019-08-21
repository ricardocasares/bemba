import { encode } from "querystring";
import fetch from "isomorphic-unfetch";

export const radio = (endpoint: string, query = {}, params = {}) =>
  fetch(
    [
      "http://www.radio-browser.info/webservice/json/stations/",
      endpoint,
      "?",
      encode(query),
    ].join(""),
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "bemba/radio-gql",
      },
      body: JSON.stringify({
        order: "votes",
        reverse: "true",
        limit: 15,
        ...params,
      }),
    }
  ).then(res => res.json());
