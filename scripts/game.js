// Get output HTML elements
const playerScoreOutput = document.getElementById('playerScore');
const computerScoreOutput = document.getElementById('computerScore');
const winnerOutput = document.getElementById('winnerOutput');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * choices.length);
    return choices[randNum];
}

function checkWhoWonTheRound(playerChoice, computerChoice) {
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

function showOverallGameWinner() {
    if (computerScore > playerScore) {
        return "The computer has won the game.";
    } else if (playerScore > computerScore) {
        return "Congratulations! You've won the game!";
    } else {
        return "It was a draw. No-one won the game.";
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = checkWhoWonTheRound(playerChoice, computerChoice);

    if (result === "draw") {
        winnerOutput.textContent = "It's a draw.";
    } else if (result === "computer") {
        computerScore++;
        winnerOutput.textContent = `Computer wins. ${computerChoice} beats ${playerChoice}`;
        computerScoreOutput.textContent = computerScore;
    } else {
        playerScore++;
        winnerOutput.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScoreOutput.textContent = playerScore;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        winnerOutput.textContent = showOverallGameWinner();
        rockButton.setAttribute("disabled", "");
        paperButton.setAttribute("disabled", "");
        scissorsButton.setAttribute("disabled", "");
    }
}

function resetGame() {
    playerScore = 0;
    playerScoreOutput.textContent = playerScore;
    computerScore = 0;
    computerScoreOutput.textContent = computerScore;

    winnerOutput.textContent = "Let's play";

    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
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

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function (e) {
    resetGame();
});