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
const body = document.getElementsByTagName('body')[0]

let celsius = true
let temperature = 0

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `${URL}lat=${position.coords.latitude}&lng=${position.coords.longitude}`,
    myInit)
      .then(response => response.json())
      .then(data => {
        weatherResolver(data)
      })
})

weatherResolver = data => {
  countryText.innerHTML = data.query.results.channel.location.country
  cityText.innerHTML = data.query.results.channel.location.city
  const iconCode = data.query.results.channel.item.condition.code
  if (iconCode == 3200) {
    weatherIcon.setAttribute('class', `wi wi-${ICONS[48]}`)
  } else {
    weatherIcon.setAttribute('class', `wi wi-${ICONS[iconCode]}`)
  }
  temperature = data.query.results.channel.item.condition.temp
  temperatureText.innerHTML = `${temperature}℃`
}

temperatureText.addEventListener('click', () => {
  if (celsius) {
    temperatureText.innerHTML = `${temperature * 1.8 + 32}°F`
    celsius = false
  } else {
    temperatureText.innerHTML = `${temperature}℃`
    celsius = true
  }
})

const now = new Date
const hours = now.getHours()

colorBackground = (hours) => {
  if (hours <= 7) {
    body.setAttribute('style', 'background: linear-gradient(to left, #141E30 , #243B55)')
  } else if ((hours <= 12) && (hours > 7)) {
    body.setAttribute('style', 'background: linear-gradient(to left, #FF5F6D , #FFC371)')
  } else if ((hours <= 20) && (hours > 12)) {
    body.setAttribute('style', 'background: linear-gradient(to left, #649173 , #DBD5A4)')
  } else if ((hours <= 21) && (hours > 20)) {
    body.setAttribute('style', 'background: linear-gradient(to left, #000000 , #53346D)')
  }
}

colorBackground(hours)
