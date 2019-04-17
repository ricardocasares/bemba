import Router from "next/router";

import * as TYPES from "./types";
import * as api from "../../lib/api";

let create = type => payload => ({ type, payload });

export let pending = create(TYPES.PENDING);
export let resolved = create(TYPES.RESOLVED);
export let rejected = create(TYPES.REJECTED);

export let search = function search({ query }) {
  return async dispatch => {
    if (!query) return;
    dispatch(pending({ query }));
    try {
      let results = await api.search({ filter: "name", name: query });

      dispatch(resolved({ results, loading: false }));
    } catch (err) {
      dispatch(rejected({ error: err.message }));
    }
  };
};
