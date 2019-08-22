import { combineReducers } from 'redux';
import { reducer as app } from './app';
import { reducer as audio } from './audio';
import { reducer as player } from './player';
import { reducer as search } from './search';
import { reducer as station } from './station';
import { reducer as suggestions } from './suggestions';

export const reducers = combineReducers({
  app,
  audio,
  player,
  search,
  station,
  suggestions,
});
