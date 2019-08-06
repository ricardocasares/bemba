import { all } from "redux-saga/effects";
import { playerSagas } from "./player/sagas";

export function* sagas() {
  yield all([...playerSagas]);
}
