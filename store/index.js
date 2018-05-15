import thunk from "redux-thunk";
import logger from "redux-logger";
import throttle from "lodash/throttle";
import { createStore, combineReducers, applyMiddleware as apply } from "redux";

import { isServer } from "../lib/utils";
import { get, save } from "../lib/storage";
import appReducer from "./app";
import playerReducer from "./player";
import searchReducer from "./search";
import libraryReducer from "./library";
import stationsReducer from "./stations";

let middleware = [thunk];

if (!isServer()) {
  middleware.push(logger);
}

let rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
  search: searchReducer,
  library: libraryReducer,
  stations: stationsReducer
});

export default function(initialState, options) {
  let store = createStore(rootReducer, get(), apply(...middleware));

  store.subscribe(throttle(() => save(store.getState()), 1000));

  return store;
}
