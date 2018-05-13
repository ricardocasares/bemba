import * as TYPES from "./types";

export const initialState = {
  stations: [],
  loading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.PENDING:
      return { ...state, query: payload.query, loading: true };
    case TYPES.REJECTED:
      return { ...state, loading: false, error: payload.error };
    case TYPES.RESOLVED:
      return { ...state, loading: false, stations: payload.stations };
  }

  return state;
}
