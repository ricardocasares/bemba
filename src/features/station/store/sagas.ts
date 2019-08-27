import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { receive, errored } from './actions';
import { ActionType, StationFetchRequest } from './model';
import { fetchStation } from '@/api/graphql';

function* execute({ payload }: StationFetchRequest) {
  try {
    const station = yield call(fetchStation, payload);
    yield put(receive(station));
  } catch (err) {
    yield put(errored(err));
  }
}

function* watchFetchRequest() {
  yield takeLatest(ActionType.FETCH_REQUEST, execute);
}

export const sagas = [fork(watchFetchRequest)];
