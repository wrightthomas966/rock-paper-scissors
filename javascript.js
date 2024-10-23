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
function playRound(humansChoice, computersChoice) {
    let outcome = (humansChoice - computersChoice + 3) % 3;

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
}

// start the game
function playGame(MAXSCORE) {
    computerScore = 0;
    humanScore = 0;

    const gameBtns = document.querySelectorAll("button");

    gameBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
            const humanSelection = getHumanChoice(event.target.textContent);
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });
    });

    /*for(let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }*/
    //console.log("Game over!");
    //logWinner(computerScore, humanScore);
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

let computerScore = 0;
let humanScore = 0;

playGame(5);