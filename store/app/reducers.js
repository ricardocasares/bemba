import * as TYPES from "./types";

export const initialState = {
  notification: {
    message: "",
    type: "info",
    hidden: false
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.INFO:
      return {
        ...state,
        notification: {
          type: "info",
          message: payload.message,
          hidden: false
        }
      };
    case TYPES.ERROR:
      return {
        ...state,
        notification: {
          type: "error",
          message: payload.message,
          hidden: false
        }
      };
    case TYPES.NOTIFICATION_SHOW:
      return {
        ...state,
        notification: {
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
