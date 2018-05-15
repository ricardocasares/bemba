import thunk from "redux-thunk";
import logger from "redux-logger";
import throttle from "lodash/throttle";
import { save, load } from "redux-localstorage-simple";
import { createStore, combineReducers, applyMiddleware as apply } from "redux";

import { isServer, isProduction } from "../lib/utils";
import appReducer from "./app";
import playerReducer from "./player";
import searchReducer from "./search";
import libraryReducer from "./library";
import stationsReducer from "./stations";

let middleware = [thunk];
let localStorageConfig = { states: ["library.stations"], namespace: "app" };

if (!isServer()) {
  middleware.push(save(localStorageConfig));
}

if (!isProduction()) {
  middleware.push(logger);
}

let rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
  search: searchReducer,
  library: libraryReducer,
  stations: stationsReducer
});

export default function(initialState) {
  if (!isServer()) {
    initialState = load({
      namespace: "app",
      states: ["library.stations"],
      preloadedState: initialState,
      disableWarnings: isProduction()
    });
  }

  let store = createStore(rootReducer, initialState, apply(...middleware));

  return store;
}
