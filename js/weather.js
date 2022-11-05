const API_KEY="513f50c84471b09e583dc0e128167560"

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = `🚩${data.name}`
    weather.innerText = `${data.weather[0].main} (${Math.floor(data.main.temp)}°C)`
  });
}

const onGeoError = () => {
  alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


