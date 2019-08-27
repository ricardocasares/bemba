import { Reducer } from 'redux';
import { Station } from '@/models/state';
import { Actions, ActionType } from './model';

export const initial: Station = {
  id: '',
  url: '',
  name: '',
  state: '',
  country: '',
  tags: [],
};

export const reducer: Reducer<Station, Actions> = (
  state = initial,
  action
): Station => {
  switch (action.type) {
    case ActionType.FETCH_RECEIVE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
