// Get output HTML elements
const playerScoreOutput = document.getElementById('playerScore');
const computerScoreOutput = document.getElementById('computerScore');
const outputString = document.getElementById('outputString');

let playerScore = 0;
let computerScore = 0;
const CHOICES = ['rock', 'paper', 'scissors'];

// Computer chooses from rock, paper or scissors
// getComputerChoice is a function that takes choicesArr as a parameter
// choicesArr is an Array
// getComputerChoice returns a String
function getComputerChoice(CHOICES) {
    let computerChoice = "";
    let randNum = Math.floor(Math.random() * CHOICES.length);
    computerChoice = CHOICES[randNum];
    return computerChoice;
}

// Check who won
// checkWhoWon is a function that takes playerChoice and computerChoice as parameters
// playerChoice and computerChoice are Strings
// checkWhoWon returns a String
function checkWhoWon(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        return "computer";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        return "computer";
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        return "computer";
    }
    return "player";
}

// Determine an overall winner
// pickOverallWinner is a function that takes computerScore and playerScore as parameters
// computerScore and playerScore are Numbers
// pickOverallWinner returns a String
function pickOverallWinner() {
    if (computerScore > playerScore) {
        return "The computer has won the game.";
    } else if (playerScore > computerScore) {
        return "Congratulations! You've won the game!";
    } else {
        return "It was a draw. No-one won the game.";
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice(CHOICES);

    let result = checkWhoWon(playerChoice, computerChoice);

    if (result === "draw") {
        outputString.textContent = "It's a draw.";
    } else if (result === "computer") {
        computerScore++;
        outputString.textContent = `Computer wins. ${computerChoice} beats ${playerChoice}`;
        computerScoreOutput.textContent = computerScore;
    } else {
        playerScore++;
        outputString.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScoreOutput.textContent = playerScore;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        outputString.textContent = pickOverallWinner();
        rockButton.setAttribute("disabled", "");
        paperButton.setAttribute("disabled", "");
        scissorsButton.setAttribute("disabled", "");
    }

}

// Add eventlisteners to the buttons
const rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', function (e) {
    playRound('rock');
});

const paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', function (e) {
    playRound('paper');
});

const scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener('click', function (e) {
    playRound('scissors');
});