import { Reducer } from 'redux';
import { Station } from '@/models/state';
import { Actions, ActionType } from './model';

export const initial: Partial<Station> = {};

export const reducer: Reducer<Partial<Station>, Actions> = (
  state = initial,
  action
): Partial<Station> => {
  switch (action.type) {
    case ActionType.LOAD:
      if (state.url === action.payload.url) {
        return state;
      }

      return { ...state, ...action.payload };
    default:
      return state;
  }
};
