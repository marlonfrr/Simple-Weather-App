import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherFromApi(location) {
  console.warn(location);
  let urlGetWeather = `${url}?q=${location.city},${location.country}&appid=43e6efa10ad6de08a0355a3c510efab2`;
  let response = null;
  try {
    response = await (
      await fetch(urlGetWeather, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    ).json();
    console.warn("Weather: ", response);
  } catch (err) {
    console.warn(err);
    response = {};
  }
  return response;
}

export const Api = {getWeatherFromApi};
