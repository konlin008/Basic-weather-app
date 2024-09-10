// https://api.weatherapi.com/v1/current.json?key=1fdda0e159724497ad3184843240309&q=London&aqi=yes

const apiKey = "1fdda0e159724497ad3184843240309";
const apiurl = "https://api.weatherapi.com/v1/current.json?aqi=yes";
const searchBar=document.querySelector(".search_bar")
const searchBtn=document.querySelector(".search_btn")

async function checkWeather(city) {
  const response = await fetch(apiurl +`&q=${city}` +`&key=${apiKey}`);
  const data = await response.json();
  document.querySelector("#temp").innerHTML = data.location.name;
  document.querySelector("#cityName").innerHTML = Math.round(data.current.temp_c)+ "°C";
  document.querySelector("#humid").innerHTML = data.current.humidity + "%";
  document.querySelector("#humid").innerHTML = data.current.wind_kph + "Km/h";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBar.value); 
})
