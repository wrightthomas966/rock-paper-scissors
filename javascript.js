// get computers choice
function getComputerChoice() {
    let computersChoice = Math.floor((Math.random() * 10) % 3);
    return computersChoice;
}

// get humans choice
function getHumanChoice(humansChoice) {
    return POSSIBLE_CHOICES.indexOf(humansChoice.toLowerCase());
}

// play a round
function playRound(event) {
    const humansChoice = getHumanChoice(event.target.textContent);
    const computersChoice = getComputerChoice();

    let outcome = (humansChoice - computersChoice + 3) % 3;

    const displayScores = document.querySelector('#score');
    const displayOutcome = document.querySelector('#result');

    if(outcome === 1) {
        displayOutcome.textContent = `You win! ${POSSIBLE_CHOICES[humansChoice]} beats ${POSSIBLE_CHOICES[computersChoice]}.`;
        humanScore++;
    } else if(outcome === 2) {
        displayOutcome.textContent = `You lose! ${POSSIBLE_CHOICES[computersChoice]} beats ${POSSIBLE_CHOICES[humansChoice]}.`;
        computerScore++;
    } else {
        displayOutcome.textContent = "Tie!";
    }

    displayScores.textContent = `${humanScore} / ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

// start the game
function playGame(MAXSCORE) {
    computerScore = 0;
    humanScore = 0;

    gameBtns.forEach((button) => button.addEventListener('click', playRound));
}

function endGame() {
    const endGameMsg = document.createElement('div');
    endGameMsg.textContent = logWinner();
    gameContainer.appendChild(endGameMsg);

    gameBtns.forEach((button) => button.removeEventListener('click', playRound));

}

// log the winner of a game to the console
function logWinner() {
    if(humanScore > computerScore) {
        return `You won!`;
    } else if(computerScore > humanScore) {
        return `You lost.`;
    } else {
        return "Tie!";
    }
}

const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

const gameContainer = document.querySelector('#rps-container');

const gameBtns = document.querySelectorAll("button");

playGame(5);