const myHeaders = new Headers({
  'X-Mashape-Key': "OYxVA1zIhrmsh4ClMqZgdprhVGZMp1AsZBwjsn5xiAE5adD0Vu",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
})

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

const TWITTER_URL = 'https://twitter.com/intent/tweet?text='
const TWITTER_HASHTAG = 'button_hashtag='

const quote = document.getElementById('quote')
const author = document.getElementById('author')
const tweet = document.getElementById('tweet')
const container = document.getElementsByTagName('body')[0]
const loadQuoteButton = document.getElementById('more')

randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

getQuote = () => {
  fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', myInit)
    .then(response => response.json())
    .then(data => {
      quote.innerHTML = data.quote
      author.innerHTML = `${data.author}`
      tweet.setAttribute(
        'href',
        `${TWITTER_URL}${encodeURIComponent(data.quote)}&${TWITTER_HASHTAG}${data.author}`
      )
      const color = randomInteger(0, 255)
      container.setAttribute('style', `background-color: hsl(${color}, 50%, 50%)`)
      tweet.setAttribute('style', `background-color: hsl(${color}, 50%, 50%)`)
      loadQuoteButton.setAttribute('style', `background-color: hsl(${color}, 50%, 50%)`)
    })
}

loadQuoteButton.addEventListener('click', () => {
  getQuote()
})

getQuote()
