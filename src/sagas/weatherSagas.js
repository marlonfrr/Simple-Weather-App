import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILED } from "../store/constants"; //prettier-ignore
// Saga effects
import {put, takeLatest} from "redux-saga/effects";
import {Api} from "./Api";

function* fetchWeather() {
  try {
    console.warn("1");
    const receivedWeather = yield Api.getWeatherFromApi();
    yield put({type: FETCH_WEATHER_SUCCESS, receivedWeather: receivedWeather});
  } catch (error) {
    console.warn("2");
    yield put({type: FETCH_WEATHER_FAILED, error});
  }
}

export function* watchFetchWeather() {
  yield takeLatest(FETCH_WEATHER, fetchWeather);
}
