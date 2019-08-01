import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { State } from "./state";
import { sagas } from "./sagas";
import { reducers } from "./reducers";
import { init as player } from "./player";

export const init: State = {
  player,
  stations: []
};

export const configureStore = (state: State = init) => {
  const mw = createSagaMiddleware();
  const store = createStore(reducers, state, applyMiddleware(mw));

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(sagas);
};
