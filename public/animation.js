
  document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
      "Discover the Art of Cooking",
      "Taste the Flavor of Life",
      "Khud banao Khud khao",
      "Cook Like a Chef",
      "Explore New Recipes"
    ];
    let currentIndex = 0;
    const quoteElement = document.getElementById("changing-quote");

    function typeQuote(quote, index) {
      if (index < quote.length) {
        quoteElement.textContent = quote.slice(0, index + 1);
        setTimeout(() => typeQuote(quote, index + 1), 100); // 100ms delay per character
      } else {
        setTimeout(changeQuote, 2000); // 2 seconds delay before changing to next quote
      }
    }

    function changeQuote() {
      currentIndex = (currentIndex + 1) % quotes.length;
      quoteElement.textContent = ''; // Clear the previous quote
      typeQuote(quotes[currentIndex], 0); // Start typing new quote
    }

    // Start typing the first quote
    typeQuote(quotes[currentIndex], 0);
  });

