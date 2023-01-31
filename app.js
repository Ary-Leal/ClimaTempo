//interação
const citySearchInput = document.getElementById('city-search-input')
const citySearchButton = document.getElementById('city-search-button')

//Exibição
const currentDate = document.getElementById("current-date")
const cityName = document.getElementById("city-name")
const weatherIcon = document.getElementById("weather-icon")
const weatherDescription = document.getElementById("weather-description")
const currentTemperature = document.getElementById("current-temperature")
const windSpeed = document.getElementById("wind-speed")
const feelsLikeTemperature =document.getElementById("feels-like-temperature")
const currentHumidity = document.getElementById("current-humidity")
const sunriseTime = document.getElementById("sunrise-time")
const sunseTime = document.getElementById("sunset-time")

const api_key = "3db64cbc6f1183c28b1e58baa8c45b2c"

citySearchButton.addEventListener("click", () => {
    let cityName = citySearchInput.value
     getCityWeather(cityName)
})

// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&rappid=${}


function getCityWeather (cityName) {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&rappid=${api_key}`)
    .then ((respose) =>respose.json())
    .then((data) => console.log(data) )

  
 }