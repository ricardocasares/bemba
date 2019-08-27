import { combineReducers } from 'redux';
import { reducer as app } from '@/features/shared/app/store';
import { reducer as audio } from '@/features/shared/audio/store';
import { reducer as player } from '@/features/shared/player/store';
import { reducer as search } from '@/features/search/store';
import { reducer as station } from '@/features/station/store';
import { reducer as suggestions } from '@/features/home/store';

export const reducers = combineReducers({
  app,
  audio,
  player,
  search,
  station,
  suggestions,
});
