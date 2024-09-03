const btn = document.getElementById("search");
const input = document.getElementById("city_input");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const time = document.getElementById("time");
async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1fdda0e159724497ad3184843240309&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
btn.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  city.innerHTML = `Place: ${result.location.name},${result.location.region},${result.location.country}`;
  condition.innerHTML = `Weather Condition: ${result.current.condition.text}`;
  temp.innerHTML = `Temperature: ${result.current.temp_c}°C`;
  wind.innerHTML = `Wind Speed: ${result.current.wind_kph}`;
  time.innerHTML = `Date & Time: ${result.location.localtime}`;
});
