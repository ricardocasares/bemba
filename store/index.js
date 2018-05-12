import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware as apply } from "redux";

import playerReducer from "./player";
import searchReducer from "./search";
import stationsReducer from "./stations";

let middleware = [thunk];

if (typeof window !== "undefined") {
  middleware.push(logger);
}

let rootReducer = combineReducers({
  player: playerReducer,
  search: searchReducer,
  stations: stationsReducer
});

export default function(initialState, options) {
  return createStore(rootReducer, initialState, apply(...middleware));
}
