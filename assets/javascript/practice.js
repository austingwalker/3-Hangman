//Global Variables---------------------------------------------------------------------------------------

var words = ["austin", "lauren", "emily", "charlie", "jenna", "alex", "mal", "gina", "john"];

var compWord = "";
var compWordSplit = [];
var blanksAndSuccesses = [];
var numBlanks = 0;
var wrongGuesses = [];
var guessesLeft = 10;
var winCount = 0;


//Functions----------------------------------------------------------------------------------------------

function startGame(){

    compWord = words[Math.floor(Math.random() * words.length)];

    compWordSplit = compWord.split("");

    numBlanks = compWordSplit.length;

    wrongGuesses = [];
    guessesLeft = 10;
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numbGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetters").innerHTML = "[ " + wrongGuesses + " ]";
    document.getElementById("score").innerHTML = "Wins: " + winCount;

    console.log(compWord);
    console.log(compWordSplit);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);


};

function checkLetters(letter){

    var isLetterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if (letter === compWord[i]){
            isLetterInWord = true;
        }
    }

    if(isLetterInWord){
        for(var i = 0; i < numBlanks; i++){
            if(compWord[i] === letter){
            blanksAndSuccesses[i] = letter;
            console.log(blanksAndSuccesses);
            }
 
        }

    }

    else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }

    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numbGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetters").innerHTML = "[ " + wrongGuesses + " ]";

    resetGame();
};

function resetGame(){

    if (guessesLeft === 0){
        alert("You lost!");
        startGame();
    }

    else if (blanksAndSuccesses.toString() === compWordSplit.toString()){
        alert("You Won!");
        winCount++
        startGame()

    }

};



//Main Processes---------------------------------------------------------------------------------------- 


//Run game upon loading page
startGame();

//Capture chosen key

document.onkeyup = function(event){

    var userGuess = String.fromCharCode(event.which).toLowerCase();

    

    checkLetters(userGuess);
};
