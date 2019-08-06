import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose, StoreEnhancer } from "redux";
import { State } from "./state";
import { sagas } from "./sagas";
import { reducers } from "./reducers";
import { init as player } from "./player";
import { init as stations } from "./stations";

export const init: State = {
  player,
  stations
};

const isBrowser = () => typeof window !== "undefined";
const withDevTools = (mw: StoreEnhancer<any>) => {
  if (isBrowser()) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(mw);
  }

  return compose(mw);
};

export const configureStore = (state: State = init) => {
  const mw = createSagaMiddleware();

  const store = createStore(reducers, state, withDevTools(applyMiddleware(mw)));

  // @ts-ignore
  store.sagaTask = mw.run(sagas);

  return store;
};
