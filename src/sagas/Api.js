import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherFromApi(country = "Col", city = "Bogota") {
  let urlGetWeather = `${url}?q=${city},${country}&appid=43e6efa10ad6de08a0355a3c510efab2`;
  // console.log(urlGetWeather);
  // const response = yield fetch(urlGetWeather, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });
  // const weather = yield response.status === 200
  //   ? JSON.parse(response._bodyInit)
  //   : {};
  // //   console.log(weather);
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
