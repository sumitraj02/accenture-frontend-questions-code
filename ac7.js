var quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Dream big and dare to fail.",
    "What we think, we become.",
    "Act as if what you do makes a difference. It does.",
    "Don’t watch the clock; do what it does. Keep going."
];
//var quotoes was given we have to add below functionality that on 
// clikcing buttion random quotoes must displya on web pages /below 4 line code we have to add that lll frontend question asked by accenture in 20206 campus hiring  assessments.

document.getElementById("generateBtn").addEventListener("click", function(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
});
