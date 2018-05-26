import * as TYPES from "./types";

export const initialState = {
  station: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.RESOLVED:
      return { ...state, station: payload.station };
  }

  return state;
}
