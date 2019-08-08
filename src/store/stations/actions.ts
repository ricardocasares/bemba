import { Stations } from "@/store/state";
import { ActionType, Request, Receive, Errored } from "./model";

export const request = (): Request => ({
  type: ActionType.REQUEST
});

export const receive = (payload: Stations): Receive => ({
  type: ActionType.RECEIVE,
  payload
});

export const errored = (payload: Error): Errored => ({
  type: ActionType.ERRORED,
  payload
});
