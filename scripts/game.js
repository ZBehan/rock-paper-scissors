// Get output HTML elements
const playerScoreOutput = document.getElementById('player-score');
const computerScoreOutput = document.getElementById('computer-score');
const winnerOutput = document.getElementById('winner-output');
const roundNumberOutput = document.getElementById('round-number');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * choices.length);
    return choices[randNum];
}

function checkWhoWonTheRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors")
        || (computerChoice === "paper" && playerChoice === "rock")
        || (computerChoice === "scissors" && playerChoice === "paper")
    ) {
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
    let computerChoice = getComputerChoice();
    const result = checkWhoWonTheRound(playerChoice, computerChoice);

    roundNumber++;
    roundNumberOutput.textContent = roundNumber;

    if (result === "draw") {
        winnerOutput.textContent = `It's a draw. You both chose ${playerChoice}.`;
    } else if (result === "computer") {
        computerScore++;
        computerChoice = convertFirstLetterToUppercase(computerChoice);
        winnerOutput.textContent = `Computer wins. ${computerChoice} beats ${playerChoice}.`;
        computerScoreOutput.textContent = computerScore;
    } else {
        playerScore++;
        playerChoice = convertFirstLetterToUppercase(playerChoice);
        winnerOutput.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScoreOutput.textContent = playerScore;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    winnerOutput.textContent = showOverallGameWinner();
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.classList.add("green");
    resetButton.classList.remove("reset");
    resetButton.textContent = "Play Again";
}

function resetGame() {
    playerScore = 0;
    playerScoreOutput.textContent = playerScore;
    computerScore = 0;
    computerScoreOutput.textContent = computerScore;

    roundNumber = 1;
    roundNumberOutput.textContent = roundNumber;

    winnerOutput.textContent = "Let's play";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    resetButton.classList.add("reset");
    resetButton.classList.remove("green");
    resetButton.textContent = "Reset";
}

function convertFirstLetterToUppercase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// Add eventlisteners to the buttons
const rockButton = document.getElementById('rock-button');
rockButton.addEventListener('click', function (e) {
    playRound('rock');
});

const paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', function (e) {
    playRound('paper');
});

const scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', function (e) {
    playRound('scissors');
});

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function (e) {
    resetGame();
});