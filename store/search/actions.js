import * as TYPES from "./types";
import * as api from "../../lib/api";

const create = type => payload => ({ type, payload });

export const pending = create(TYPES.PENDING);
export const resolved = create(TYPES.RESOLVED);
export const rejected = create(TYPES.REJECTED);

export function search({ query, page, limit }) {
  return async dispatch => {
    const failure = error => dispatch(rejected({ error: error.message }));
    const success = results => dispatch(resolved({ results, loading: false }));

    dispatch(pending({ query, loading: true }));

    return api
      .search({ query })
      .then(success)
      .catch(failure);
  };
}
