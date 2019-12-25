import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILED } from "../constants"; //prettier-ignore
import {INITIAL_STATE} from "./initialState";

export default fetchWeather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return action.receivedWeather;
    case FETCH_WEATHER_FAILED:
      return {};
    default:
      return state;
  }
};
