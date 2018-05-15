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
  playing: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.LOAD:
      return {
        ...state,
        station: payload,
        ready: false,
        hidden: false,
        playing: false
      };
    case TYPES.PLAY:
      return {
        ...state,
        hidden: false,
        playing: true
      };
    case TYPES.PAUSE:
      return {
        ...state,
        playing: false
      };
    case TYPES.ERROR:
      return {
        ...state,
        playing: false
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
