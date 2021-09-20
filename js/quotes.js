const savedQuotes = [
    {
        quotes: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "-Dr. Seuss",
    },
    {
        quotes: "You only live once, but if you do it right, once is enough.",
        author: "-Mae West",
    },
    {
        quotes: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "-Oscar Wilde",
    },
    {
        quotes: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "-Mahatma Gandhi",
    },
    {
        quotes: "Without music, life would be a mistake.",
        author: "-Friedrich Nietzsche, Twilight of the Idols",
    },
    {
        quotes: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "-Albert Einstein",
    },
    {
        quotes: "That which does not kill us makes us stronger.",
        author: "-Friedrich Nietzsche",
    },
    {
        quotes: "If you judge people, you have no time to love them.",
        author: "-Mother Teresa",
    },
    {
        quotes: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "-Albert Einstein",
    },
    {
        quotes: "Everything you can imagine is real.",
        author: "-Pablo Picasso",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");0

const todaysQuote = savedQuotes[Math.floor(Math.random() * savedQuotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;