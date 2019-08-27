import { Reducer } from 'redux';
import { Player } from '@/models/state';
import { Actions, ActionType } from './model';

export const initial: Player = {
  ready: false,
  playing: false,
  station: {
    id: '',
    url: '',
    name: '',
    state: '',
    country: '',
    tags: [],
  },
};

export const reducer: Reducer<Player, Actions> = (
  state = initial,
  action
): Player => {
  switch (action.type) {
    case ActionType.PLAY:
      return { ...state, playing: true };
    case ActionType.READY:
      return { ...state, ready: true };
    case ActionType.PAUSE:
      return { ...state, playing: false };
    case ActionType.LOAD:
      return { ...state, station: action.payload };
    default:
      return state;
  }
};
