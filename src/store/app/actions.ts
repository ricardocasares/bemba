import { Action } from "redux";

export enum ActionType {
  CLIENT_READY = "@bemba/client/ready"
}

export interface ClientReady extends Action<ActionType.CLIENT_READY> {}

export type Actions = ClientReady;

export const clientReady = (): ClientReady => ({
  type: ActionType.CLIENT_READY
});
