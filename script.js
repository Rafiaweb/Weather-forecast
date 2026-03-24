function getWeather() {
  let city = document.getElementById("city").value.trim();

  if(city === ""){
    alert("Enter city name");
    return;
  }

  let temperatures = [20,22,25,28,30,32];
  let weatherTypes = ["Sunny","Cloudy","Rainy","Windy","Stormy","Clear sky"];

  let temp = temperatures[Math.floor(Math.random() * temperatures.length)];
  let weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

  document.getElementById("output").innerText =
    `City: ${city}
    \nTemperature: ${temp}
    °C\nWeather: ${weather}`;
}