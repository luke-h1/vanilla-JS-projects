const letters = ["a", "b", "c", "d", "e", "f"] 
function getLetter() { 
    let randomNumber = Math.floor(Math.random() * letters.length); 
    document.getElementById('section').innerHTML = letters[randomNumber]; 
    }
