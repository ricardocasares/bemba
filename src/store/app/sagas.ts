import { put, call, fork, takeLatest } from "redux-saga/effects";
import { geo } from "@/api/geo";
import { geoReceive, geoErrored, geoRequest } from "./actions";
import { ActionType, BembaGeoRequest, BembaServerReady } from "./model";

const DEV_GEO_IP_ADDRESS = process.env.DEV_GEO_IP_ADDRESS;

function* server({ payload }: BembaServerReady) {
  if (payload.req) {
    const ip = payload.req.headers["x-forwarded-for"] || DEV_GEO_IP_ADDRESS;
    yield put(geoRequest(ip as string));
  }
}

function* executeGeoRequest({ payload }: BembaGeoRequest) {
  try {
    const user = yield call(geo, payload);
    yield put(geoReceive(user));
  } catch (err) {
    console.error(err);
    yield put(geoErrored(err));
  }
}

function* watchGeoRequest() {
  yield takeLatest(ActionType.GEO_REQUEST, executeGeoRequest);
}

function* watchServerReady() {
  yield takeLatest(ActionType.SERVER_READY, server);
}

export const sagas = [fork(watchServerReady), fork(watchGeoRequest)];
