import * as TYPES from "./types";

export const searchState = {
  query: "",
  results: [],
  error: null,
  loading: false
};

export default function(state = searchState, { type, payload }) {
  switch (type) {
    case TYPES.PENDING:
      return { ...state, loading: true };
    case TYPES.REJECTED:
      return { ...state, loading: false, error: payload.error };
    case TYPES.RESOLVED:
      return { ...state, loading: false, results: payload.results };
  }

  return state;
}
