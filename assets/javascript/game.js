//Global Variables ------------------------------------------------------------------------------------------------

var words = ["longhorn", "congress", "food", "music"];

var compWord = "";
var compWordSplit = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];


var winCount = 0;
var guessesLeft = 15;


//Functions ------------------------------------------------------------------------------------------------------
function startGame() {

    compWord = words[Math.floor(Math.random() * words.length)];
    compWordSplit = compWord.split("");

    numBlanks = compWordSplit.length;





    guessesLeft = 15;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
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

function processLetters(letter) {

    //Check if letter exists
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (letter === compWord[i]) {
            isLetterInWord = true;
        }
    }
    
    //Check where in the word the letter exists, then populate our blanksAndSuccesses
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (compWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
                console.log(blanksAndSuccesses);

            }
        }

    } else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }

    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numbGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetters").innerHTML = "[ " + wrongGuesses + " ]";
resetGame();
};


function resetGame(){

    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numbGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetters").innerHTML = "[ " + wrongGuesses + " ]";
    
     if(guessesLeft === 0) {
        alert("You lost!");
        startGame();
    }

    else if (compWordSplit.toString() === blanksAndSuccesses.toString()) {
        
        alert("You won!");
        winCount++;
        startGame();

        document.getElementById("score").innerHTML = "Wins: " + winCount;
       
    }

     
   
};




//Main Processes -------------------------------------------------------------------------------------------------
// Initiates the code for the first time
startGame();

//Registers key clicks
document.onkeyup = function (event) {

    var userLetter = String.fromCharCode(event.which).toLowerCase();

    processLetters(userLetter);
};

