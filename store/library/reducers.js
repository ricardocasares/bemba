import * as TYPES from "./types";

export const initialState = {
  stations: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.ADD:
      return {
        ...state,
        stations: [...state.stations, payload]
      };
    case TYPES.REMOVE:
      return {
        stations: [...state.stations.filter(({ id }) => id !== payload)]
      };
  }

  return state;
}
