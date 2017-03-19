const myHeaders = new Headers({
  'X-Mashape-Key': "OYxVA1zIhrmsh4ClMqZgdprhVGZMp1AsZBwjsn5xiAE5adD0Vu",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
})

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

fetch('https://simple-weather.p.mashape.com/weatherdata?lat=59.934280&lng=30.335099', myInit)
 .then(response => response.json())
 .then(data => {
   console.log(data)
 })
