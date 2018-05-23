import * as TYPES from "./types";
import * as api from "../../lib/api";
import { showErrorNotification } from "../app/actions";

let create = type => payload => ({ type, payload });

export let resolved = create(TYPES.RESOLVED);

export function get(id) {
  return async dispatch => {
    try {
      const station = await api.get(id);
      dispatch(resolved({ station }));
    } catch (err) {
      dispatch(showErrorNotification({ error: err.message }));
    }
  };
}
