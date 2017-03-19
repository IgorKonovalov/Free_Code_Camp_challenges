const myHeaders = new Headers({'X-Mashape-Key': "OYxVA1zIhrmsh4ClMqZgdprhVGZMp1AsZBwjsn5xiAE5adD0Vu", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"})

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
}

const URL = 'https://simple-weather.p.mashape.com/weatherdata?'

const ICONS = ['tornado', 'day-storm-showers', 'hurricane', 'thunderstorm',
'thunderstorm', 'rain-mix', 'rain-mix',  'rain-mix', 'hail', 'showers', 'hail',
'showers', 'showers', 'snow', 'day-snow', 'snow-wind', 'snow', 'hail',  'rain-mix',
'dust', 'fog', 'windy', 'smoke', 'strong-wind', 'strong-wind', 'snowflake-cold',
'cloudy', 'night-cloudy', 'day-cloudy', 'night-cloudy', 'day-cloudy', 'night-clear',
'day-sunny', 'night-partly-cloudy', 'day-sunny-overcast', 'rain-mix', 'hot', 'day-storm-showers',
'day-storm-showers', 'day-storm-showers', 'showers', 'snow-wind', 'snow', 'snow-wind',
'day-sunny-overcast', 'day-storm-showers', 'snow', 'day-storm-showers', 'stars'] // 48 -> 3200

const countryText = document.getElementById('country')
const cityText = document.getElementById('city')
const weatherIcon = document.getElementById('weatherIcon')
const temperatureText = document.getElementById('temperature')

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `${URL}lat=${position.coords.latitude}&lng=${position.coords.longitude}`,
    myInit)
      .then(response => response.json())
      .then(data => {
        countryText.innerHTML = data.query.results.channel.location.country
        cityText.innerHTML = data.query.results.channel.location.city
        const iconCode = data.query.results.channel.item.condition.code
        weatherIcon.setAttribute('class', `wi wi-${ICONS[iconCode]}`)
        temperatureText.innerHTML = `${data.query.results.channel.item.condition.temp}℃`
        console.log(data)
      })
})
