// the main objective is to allow user to pick rock paper or scissor and the computer randomly chooses one to the best of 5. 
// There should be a function that reads which rock or paper or scissor user chose through the button pressed
// the program then should compare to the computer randomly generated
// if... then....if....else for ROCK > Scissor
// the game should reset after each round
// there should be a i++ which increases everytime
//You will want a array of string which using the ...length variable to use to to randomly pick one and return it to the main function.
//there should be output that says "You won" "you lost"
// there should be a score tracker to keep track tally points depending on who won
// if user won all game or lost all the rounds, stop the game and have a "play again"
// html should have three buttons, rock paper scissor, computer and user, a a score tracker under their names, 

/* We will break everything into small steps instead of tackling the biggest one first. We will do the smallest.*/

let computerScore = 0;
let playerScore = 0;
let roundNum = 0;
let selectionArray = ['rock', 'paper', 'scissor'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const roundOutcome= document.getElementById('roundOutcome');
const gameOutcome = document.getElementById('gameOutcome');
const playAgain = document.getElementById('playAgain');
const numberTracker = document.getElementById('numberTracker');
const userInput = document.getElementById('userInput');
let userChoice;



//Runs the playAgain() function
playAgain.addEventListener('click', restartGame);


// Computer Random Picker
function computerPlay() {
    let comPlay = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return comPlay;
}

//converts the buttons into a rock or paper or scissor
rock.onclick = function rock() {
    userChoice = 'rock';
    console.log(userChoice);
    playRound(userChoice, computerPlay());
}

paper.onclick =  function paper() {
    userChoice ='paper';
    console.log(userChoice);
    playRound(userChoice, computerPlay());
}

scissor.onclick = function scissor() {
    userChoice ='scissor';
    console.log(userChoice);
    playRound(userChoice, computerPlay());
}





//Play one roud and check who wins
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection === computerSelection) {
        roundOutcome.textContent = 'Tied Game!';
        console.log(1);
    } else if(playerSelection === "rock" && computerSelection ==="paper") {
        roundOutcome.textContent = 'You Lost!';
        console.log(2);
        computerScore++;
    } else if(playerSelection === "rock" && computerSelection ==="scissor") {
        roundOutcome.textContent = 'You Won!';
        playerScore++;
        console.log(3);
    } else if(playerSelection === "paper" && computerSelection ==="rock") {
        roundOutcome.textContent = 'You Won!';
        playerScore++;
        console.log(4);
    } else if(playerSelection === "paper" && computerSelection ==="scissor") {
        roundOutcome.textContent = 'You Lost!';
        computerScore++;
        console.log(5);
    } else if(playerSelection === "scissor" && computerSelection ==="paper") {
        roundOutcome.textContent = 'You Won!' ;
        playerScore++;
        console.log(6);
    } else if(playerSelection === "scissor" && computerSelection ==="rock") {
        roundOutcome.textContent ='You Lost!';
        computerScore++;
        console.log(7);
    } 
    roundTracker();
}

// tracks the current round and the points
function roundTracker() {
    roundNum++;
    numberTracker.textContent = `Round ${roundNum}, playerscore: ${playerScore}, computerScore: ${computerScore}`;
        
    if(playerScore === 5 || computerScore === 5) {
        gameOver();
    }

}

// end the game
function gameOver() {
    if(playerScore === 5) {
        gameOutcome.textContent = 'Player has Won!'
    } else {
        gameOutcome.textContent = 'Computer has Won!'
    }
    paper.disabled = true;
    rock.disabled = true;
    scissor.disabled = true;
    playAgain.style.visibility = 'visible';

}
  
//Reset game to starting position                      
function restartGame() {
    //reset score
    playerScore = 0;
    computerScore = 0;
    roundNum = 0;

    //clear console
    console.clear();
    //re-enable buttons
    paper.disabled = false;
    rock.disabled = false;
    scissor.disabled = false;

    //clear paragraph
    gameOutcome.textContent = '';
    roundOutcome.textContent = '';
    numberTracker.textContent = '';
    

}
