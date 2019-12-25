const url = "api.openweathermap.org/data/2.5/weather";

function* getWeatherFromApi(country = "Col", city = "Bogota") {
  let urlGetWeather = `${url}?q=${city},${country}&appid=43e6efa10ad6de08a0355a3c510efab2`;
  console.log(urlGetWeather);
  const response = yield fetch(urlGetWeather, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const weather = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : {};
  //   console.log(weather);
  return weather;
}

export const Api = {getWeatherFromApi};
