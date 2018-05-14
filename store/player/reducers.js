import * as TYPES from "./types";

export const initialState = {
  station: {
    name: "",
    state: "",
    country: "",
    url: ""
  },
  hidden: true,
  ready: false,
  playing: false,
  loading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.LOAD:
      return {
        ...state,
        station: payload.station,
        ready: false,
        hidden: false,
        loading: true
      };
    case TYPES.HIDE:
      return {
        ...state,
        hidden: true
      };
    case TYPES.SHOW:
      return {
        ...state,
        hidden: !state.ready
      };
    case TYPES.READY:
      return {
        ...state,
        ready: true
      };
  }

  return state;
}
