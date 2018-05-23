import thunk from "redux-thunk";
import logger from "redux-logger";
import { save, load } from "redux-localstorage-simple";
import { createStore, combineReducers, applyMiddleware as apply } from "redux";

import { isServer, isProduction } from "../lib/utils";
import appReducer from "./app";
import playerReducer from "./player";
import searchReducer from "./search";
import libraryReducer from "./library";
import stationReducer from "./station";
import stationsReducer from "./stations";

let middleware = [thunk];
let localStorageConfig = {
  debounce: 500,
  namespace: "app",
  states: ["library.stations"]
};

if (!isServer()) {
  middleware.push(save(localStorageConfig));
}

if (!isProduction() && !isServer()) {
  middleware.push(logger);
}

let rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
  search: searchReducer,
  library: libraryReducer,
  station: stationReducer,
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
