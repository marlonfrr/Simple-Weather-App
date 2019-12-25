import {call, all} from "redux-saga/effects";
import {watchFetchWeather} from "./weatherSagas";

export default function* rootSaga() {
  yield call(watchFetchWeather);
}
