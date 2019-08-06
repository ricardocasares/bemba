import { Action } from "redux";

export enum Type {
  CLIENT_READY = "@bemba/client/ready"
}

export interface ClientReady extends Action<Type.CLIENT_READY> {}

export type Actions = ClientReady;

export const clientReady = (): ClientReady => ({ type: Type.CLIENT_READY });
