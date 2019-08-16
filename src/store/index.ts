import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose, StoreEnhancer } from "redux";
import { BembaState } from "@/models/state";
import { sagas } from "./sagas";
import { reducers } from "./reducers";
import { initial as app } from "./app";
import { initial as audio } from "./audio";
import { initial as player } from "./player";
import { initial as search } from "./search";
import { initial as station } from "./station";
import { initial as suggestions } from "./suggestions";

export const init: BembaState = {
  app,
  audio,
  player,
  search,
  station,
  suggestions
};

const isBrowser = () => typeof window !== "undefined";
const withDevTools = (mw: StoreEnhancer<any>) => {
  if (isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(mw);
  }

  return compose(mw);
};

export const configureStore = (state: BembaState = init) => {
  const mw = createSagaMiddleware();
  const store = createStore(reducers, state, withDevTools(applyMiddleware(mw)));
  // @ts-ignore
  store.sagaTask = mw.run(sagas);

  return store;
};
