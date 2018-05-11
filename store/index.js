import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware as apply } from "redux";

import searchReducer from "./search";
import stationsReducer from "./stations";

let mw = [thunk];

let rootReducer = combineReducers({
  search: searchReducer,
  stations: stationsReducer
});

export default function(initialState, options) {
  return createStore(rootReducer, initialState, apply(...mw));
}
