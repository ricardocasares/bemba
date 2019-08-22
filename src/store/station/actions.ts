import { Station } from '@/models/state';
import { ActionType, StationLoad } from './model';

export const load = (payload: Station): StationLoad => ({
  type: ActionType.LOAD,
  payload,
});
