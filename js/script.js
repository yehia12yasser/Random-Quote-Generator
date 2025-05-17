var quotes = [
  ["Resentment is like drinking poison and waiting for your enemies to die.", "--Nelson Mandela"],
  ["Be yourself; everyone else is already taken.", "--Oscar Wilde"],
  ["In the middle of difficulty lies opportunity.", "--Albert Einstein"],
  ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "--Winston Churchill"],
  ["Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "--Buddha"]
];

var index = 0;

function showQuote() {
  index = index + 1;
  if (index >= quotes.length) {
    index = 0;
  }

  var quoteText = quotes[index][0];
  var authorText = quotes[index][1];

  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  
  quoteElement.innerHTML = '"' + quoteText + '"';
  authorElement.innerHTML = authorText;
}