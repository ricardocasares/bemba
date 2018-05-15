import * as TYPES from "./types";
import { toObjectByKey } from "../../lib/utils";

export const initialState = {
  stations: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.ADD:
      return {
        stations: { ...state.stations, [payload.id]: payload }
      };
    case TYPES.REMOVE:
      let stations = Object.assign({}, state.stations);
      delete stations[payload];
      return { stations };
  }

  return state;
}
