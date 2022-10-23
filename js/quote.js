const quote = document.getElementById('quote');
const author = document.getElementById('author')

const quotesUrl = 'https://type.fit/api/quotes';
const response = await fetch(quotesUrl);
let quotesDummy = await response.json();
let quotes = await quotesDummy.slice(0,200)

const getQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const text = quotes[randomNumber].text;
  const person = quotes[randomNumber].author !== null? quotes[randomNumber].author: "Unknown" ;

  quote.innerText = text
  author.innerText = person
};

getQuote();
setInterval(getQuote, 10000);
