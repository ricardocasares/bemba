import { all, put, take, fork, takeLatest } from 'redux-saga/effects';
import * as App from '@/features/shared/app/store';
import * as Player from '@/features/shared/player/store';
import * as Audio from '@/features/shared/audio/store';
import * as Search from '@/features/search/store';
import * as Station from '@/features/station/store';
import * as Suggestions from '@/features/home/store';

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
