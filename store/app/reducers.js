import * as TYPES from "./types";

export const initialState = {
  notification: {
    message: "",
    type: "error",
    hidden: true
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.SHOW_INFO:
      return {
        ...state,
        notification: {
          type: "info",
          message: payload.message,
          hidden: false
        }
      };
    case TYPES.SHOW_ERROR:
      return {
        ...state,
        notification: {
          type: "error",
          message: payload.message,
          hidden: false
        }
      };
    case TYPES.NOTIFICATION_HIDE:
      return {
        ...state,
        notification: {
          hidden: true
        }
      };
  }

  return state;
}
