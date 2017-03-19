
const myHeaders = new Headers({
  'X-Mashape-Key': "OYxVA1zIhrmsh4ClMqZgdprhVGZMp1AsZBwjsn5xiAE5adD0Vu",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
})

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', myInit)
  .then(response => response.json())
  .then(data => console.log(data))
