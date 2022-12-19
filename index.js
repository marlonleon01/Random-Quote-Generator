const randomQuotes = [
    {person: "WALT DISNEY", quote: '"The way to get started is to quit talking and begin doing."'},
    {person: "STEVE JOBS", quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."'},
    {person: "ELEANOR ROOSEVELT", quote: '"If life were predictable it would cease to be life, and be without flavor."'},
    {person: "OPRAH WINFREY", quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."'},
    {person: "JAMES CAMERON", quote: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."'},
    {person: "HELEN KELLER", quote: '"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."'},
    {person: "ARISTOTLE", quote: '"It is during our darkest moments that we must focus to see the light."'},
    {person: "ANNE FRANK", quote: '"Whoever is happy will make others happy too."'},
    {person: "BOB MARLEY", quote: '"Love the life you live. Live the life you love."'},
    {person: "BARACK OBAMA", quote: '"The real test is not whether you avoid this failure, because you won\'t. It\'s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."'},
    {person: "JOHN LENNON", quote: '"Life is what happens when you\'re busy making other plans."'}
]

let newQuoteBtn = document.getElementById("new-quote");
let mainText = document.querySelector(".quote")
let personName = document.querySelector(".person")

newQuoteBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * randomQuotes.length);
    mainText.textContent = randomQuotes[random].quote;
    personName.textContent = randomQuotes[random].person;
});