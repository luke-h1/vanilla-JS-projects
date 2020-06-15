var quotes = [
    "The 1% Of The 1%",
    "Relationships Are About Control",
    "How do I take off a mask when it stops being a mask, when it\'s as much a part of me as I am ?",
    "A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who you are.",
    "Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world.",
    "So this is what a revolution looks like, people in expensive clothing running around. Not how I pictured it",
    "I\’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads.",
    "Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no. The actual will to take is often the only thing that’s necessary.",
    "I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order.",
    "Every day, we change the world, but to change the world in a way that means anything, that takes more time than most people have. It never happens all at once. It\’s slow. It\’s methodical. It\’s exhausting. We don\’t all have the stomach for it." , 
    "World catastrophes like this, they aren't caused by lone wolves like you. They occur because men like me allow them. You just had to stumble onto one of them.",
    "I'm gonna fix the world I broke, and put it back together better than it was before.",
    "I don't want your proof. I want your belief",
    "Politics is for puppets.",
    "Now he's doing what all small animals do when they're scared, pretend they're bigger and scarier.",
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteOutput').innerHTML = quotes[randomNumber];

}