import { all, put, take, fork, takeLatest } from "redux-saga/effects";
import * as App from "./app";
import * as Player from "./player";
import * as Audio from "./audio";
import * as Station from "./station";

function* init() {
  yield take(App.ActionType.CLIENT_READY);
  yield put(Audio.init());
}

function* load(action: Station.Load) {
  yield put(Audio.load(action.payload.url));
}

function* play() {
  yield put(Audio.play());
}

function* pause() {
  yield put(Audio.pause());
}

function* mapPlay() {
  yield takeLatest(Player.ActionType.PLAY, play);
}

function* mapPause() {
  yield takeLatest(Player.ActionType.PAUSE, pause);
}

function* mapLoad() {
  yield takeLatest(Station.ActionType.LOAD, load);
}

const mappings = [fork(mapLoad), fork(mapPlay), fork(mapPause)];

export function* sagas() {
  yield all([fork(init), ...mappings, ...Audio.sagas]);
}
