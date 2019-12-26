import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from "../constants";

export const fetchWeatherAction = () => {
  return {
    type: FETCH_WEATHER,
    // location: {country, city},
    // country,
    // city,
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
export const fetchWeatherFailedAction = error => {
  return {
    type: FETCH_WEATHER_FAILED,
    error,
  };
};
