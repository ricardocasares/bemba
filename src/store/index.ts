import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux';
import { BembaState } from '@/models/state';
import { initial as app } from '@/features/shared/app/store';
import { initial as audio } from '@/features/shared/audio/store';
import { initial as player } from '@/features/shared/player/store';
import { initial as search } from '@/features/search/store';
import { initial as station } from '@/features/station/store';
import { initial as suggestions } from '@/features/home/store';
import { reducers } from './reducers';
import { sagas } from './sagas';

export const init: BembaState = {
  app,
  audio,
  player,
  search,
  station,
  suggestions,
};

const isBrowser = () => typeof window !== 'undefined';
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
