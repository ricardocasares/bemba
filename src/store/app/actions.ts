import { NextPageContext } from "next";
import { User } from "@/models/state";
import {
  ActionType,
  BembaClientReady,
  BembaServerReady,
  BembaGeoRequest,
  BembaGeoReceive,
  BembaGeoErrored
} from "./model";

export const clientReady = (): BembaClientReady => ({
  type: ActionType.CLIENT_READY
});

export const serverReady = (payload: NextPageContext): BembaServerReady => ({
  type: ActionType.SERVER_READY,
  payload
});

export const geoRequest = (payload: string): BembaGeoRequest => ({
  type: ActionType.GEO_REQUEST,
  payload
});

export const geoReceive = (payload: User): BembaGeoReceive => ({
  type: ActionType.GEO_RECEIVE,
  payload
});

export const geoErrored = (payload: Error): BembaGeoErrored => ({
  type: ActionType.GEO_ERRORED,
  payload
});
