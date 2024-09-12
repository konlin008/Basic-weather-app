
const apiKey = "1fdda0e159724497ad3184843240309";
const apiurl = "https://api.weatherapi.com/v1/current.json?aqi=yes";
const searchBar = document.querySelector(".search_bar");
const searchBtn = document.querySelector(".search_btn");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + `&q=${city}` + `&key=${apiKey}`);
  if (response.status == 400) {
    document.querySelector("#errorMsg").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    document.querySelector("#temp").innerHTML = data.location.name;
    document.querySelector("#cityName").innerHTML =
      Math.round(data.current.temp_c) + "°C";
    document.querySelector("#humid").innerHTML = data.current.humidity + "%";
    document.querySelector("#wind").innerHTML = data.current.wind_kph + "Km/h";
    weatherIcon.src = data.current.condition.icon;

    document.querySelector(".weather").style.display = "block";
    document.querySelector("#errorMsg").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
