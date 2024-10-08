// get computers choice
function getComputerChoice() {
    let computersChoice = Math.floor((Math.random() * 10) % 3);
    return computersChoice;
}

// get humans choice
function getHumanChoice() {
    let humansChoice;
    while(!POSSIBLE_CHOICES.includes(humansChoice)) {
        humansChoice = prompt("Please enter either Rock, paper or Scissors to play!").toLowerCase();
    }
    return POSSIBLE_CHOICES.indexOf(humansChoice);
}

// play a round
function playRound(humansChoice, computersChoice) {
    let outcome = (humansChoice - computersChoice + 3) % 3;

    if(outcome === 1) {
        console.log(`You win! ${POSSIBLE_CHOICES[humansChoice]} beats ${POSSIBLE_CHOICES[computersChoice]}.`);
        humanScore++;
    } else if(outcome === 2) {
        console.log(`You lose! ${POSSIBLE_CHOICES[computersChoice]} beats ${POSSIBLE_CHOICES[humansChoice]}.`);
        computerScore++;
    } else {
        console.log("Tie!");
    }
}

// start the game
function playGame(rounds) {
    computerScore = 0;
    humanScore = 0;

    for(let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    console.log("Game over!");
    logWinner(computerScore, humanScore);
}

// log the winner of a game to the console
function logWinner(computerScore, humanScore) {
    if(humanScore > computerScore) {
        console.log(`You won! ${humanScore} - ${computerScore + humanScore}`);
    } else if(computerScore > humanScore) {
        console.log(`You lost. ${humanScore} - ${computerScore + humanScore}`);
    } else {
        console.log("Tie!");
    }
}

const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

let computerScore;
let humanScore;

playGame(5);