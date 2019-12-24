import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from "../constants";

export const fetchWeatherAction = location => {
  return {
    type: FETCH_WEATHER,
    location,
  };
};

// Action dispatched by redux-sagas
export const fetchWeatherSuccessAction = recievedWeather => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    recievedWeather,
  };
};
// Action dispatched by redux-sagas
export const fetchWeatherAction = error => {
  return {
    type: FETCH_WEATHER_FAILED,
    error,
  };
};
