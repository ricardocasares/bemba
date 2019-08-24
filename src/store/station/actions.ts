import { Station } from '@/models/state';
import {
  ActionType,
  StationFetchRequest,
  StationFetchReceive,
  StationFetchErrored,
} from './model';

export const request = (payload: string): StationFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload,
});

export const receive = (payload: Station): StationFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload,
});

export const errored = (payload: Error): StationFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload,
});
