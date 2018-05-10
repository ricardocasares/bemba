import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import searchReducer, { searchState } from "./search";

export default (initialState, options) => {
  return createStore(
    combineReducers({
      search: searchReducer
    }),
    // initial state
    {
      search: searchState
    },
    applyMiddleware(thunk)
  );
};
