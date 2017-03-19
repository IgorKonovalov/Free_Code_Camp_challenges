const myHeaders = new Headers({
  'X-Mashape-Key': "OYxVA1zIhrmsh4ClMqZgdprhVGZMp1AsZBwjsn5xiAE5adD0Vu",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
})

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

const URL = 'https://simple-weather.p.mashape.com/weatherdata?'

navigator.geolocation.getCurrentPosition((position) => {
  fetch(`${URL}lat=${position.coords.latitude}&lng=${position.coords.longitude}`, myInit)
   .then(response => response.json())
   .then(data => {
     console.log(data)
   })
})
