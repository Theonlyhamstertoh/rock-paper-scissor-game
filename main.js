// allow a more complex rock paper scissor game
// more randomizing 
// give supersayen power to the images
// make rock shake
// give button animation
// get rid of image borde
// make images scalable
// disappearing" You win you lose " message
// Allow to see computer choice
// have heart animations to do remaining lives
// do a story animation before hand

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

const playerPoints = document.getElementById('playerScore');
const computerPoints = document.getElementById('computerScore');
const roundValue = document.querySelector('.roundNumber');

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
        roundOutcome.textContent = 'You Lost The Round!';
        console.log(2);
        computerScore++;
    } else if(playerSelection === "rock" && computerSelection ==="scissor") {
        roundOutcome.textContent = 'You Won The Round!';
        playerScore++;
        console.log(3);
    } else if(playerSelection === "paper" && computerSelection ==="rock") {
        roundOutcome.textContent = 'You Won The Round!';
        playerScore++;
        console.log(4);
    } else if(playerSelection === "paper" && computerSelection ==="scissor") {
        roundOutcome.textContent = 'You Lost The Round!';
        computerScore++;
        console.log(5);
    } else if(playerSelection === "scissor" && computerSelection ==="paper") {
        roundOutcome.textContent = 'You Won The Round!' ;
        playerScore++;
        console.log(6);
    } else if(playerSelection === "scissor" && computerSelection ==="rock") {
        roundOutcome.textContent ='You Lost The Round!';
        computerScore++;
        console.log(7);
    } 
    roundTracker();
}

// tracks the current round and the points
function roundTracker() {
    roundNum++;
    roundValue.textContent = `Round ${roundNum}`;
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;

        
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
    playerPoints.textContent = '';
    computerPoints.textContent= '';
    playAgain.style.visibility = 'hidden';
    roundValue.textContent = ``;
   
    

}


