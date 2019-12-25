import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILED } from "../store/constants"; //prettier-ignore
// Saga effects
import {put, takeLatest} from "redux-saga/effects";
import {Api} from "./Api";

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getWeatherFromApi();
    yield put({type: FETCH_WEATHER_SUCCESS, receivedMovies: receivedMovies});
  } catch (error) {
    yield put({type: FETCH_WEATHER_FAILED, error});
  }
}

export function* watchFetchWeather() {
  yield takeLatest(FETCH_WEATHER, fetchMovies);
}
