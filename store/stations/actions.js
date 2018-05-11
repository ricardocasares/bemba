import debounce from "debounce-action";

import * as TYPES from "./types";
import * as api from "../../lib/api";

let create = type => payload => ({ type, payload });

export let pending = create(TYPES.PENDING);
export let resolved = create(TYPES.RESOLVED);
export let rejected = create(TYPES.REJECTED);

export function stations({ filter, name, page, limit }) {
  return async dispatch => {
    let failure = error => dispatch(rejected({ error: error.message }));
    let success = stations => dispatch(resolved({ stations }));

    dispatch(pending({ loading: true }));

    try {
      const stations = await api.stations({ filter, name });
      dispatch(resolved({ stations }));
    } catch (err) {
      dispatch(rejected({ error: err.message }));
    }
  };
}
