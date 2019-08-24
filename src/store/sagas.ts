import { all, put, take, fork, takeLatest } from 'redux-saga/effects';
import * as App from './app';
import * as Player from './player';
import * as Audio from './audio';
import * as Search from './search';
import * as Station from './station';
import * as Suggestions from './suggestions';

function* client() {
  yield take(App.ActionType.CLIENT_READY);
  yield put(Audio.init());
}

function* load(action: Player.PlayerLoad) {
  yield put(Audio.load(action.payload.url));
  yield put(Player.ready());
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
  yield takeLatest(Player.ActionType.LOAD, load);
}

const mappings = [fork(mapLoad), fork(mapPlay), fork(mapPause)];

export function* sagas() {
  yield all([
    fork(client),
    ...mappings,
    ...App.sagas,
    ...Audio.sagas,
    ...Search.sagas,
    ...Station.sagas,
    ...Suggestions.sagas,
  ]);
}
