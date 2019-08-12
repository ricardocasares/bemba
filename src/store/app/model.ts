import { Action } from "redux";

export enum ActionType {
  CLIENT_READY = "@bemba/client/ready"
}

export interface BembaClientReady extends Action<ActionType.CLIENT_READY> {}
export type Actions = BembaClientReady;
