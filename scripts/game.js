// Step 1: Computer chooses from rock, paper or scissors
// getComputerChoice is a function that takes choicesArr as a parameter
// choicesArr is an Array
// getComputerChoice returns a String
function getComputerChoice(CHOICES) {
    let computerChoice = "";
    let randNum = Math.floor(Math.random() * CHOICES.length);
    computerChoice = CHOICES[randNum];
    return computerChoice;
}


// Step 2: Player chooses from rock, paper or scissors
// getPlayerChoice is a function that takes choicesArr as a parameter
// choicesArr is an array
// getPlayerChoice returns a String
function getPlayerChoice(CHOICES) {
    let playerInput = "";
    playerInput = prompt("Please choose from: rock, paper or scissors");
    playerInput = playerInput.toLowerCase();

    while (!CHOICES.includes(playerInput)) {
        playerInput = prompt(`Your selection "${playerInput}" is not valid.\nPlease choose from: rock, paper or scissors`);
        playerInput = playerInput.toLowerCase();
    }

    return playerInput;
}


// Step 3: Check who won
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

// Step 6: Determine an overall winner
// pickOverallWinner is a function that takes computerScore and playerScore as parameters
// computerScore and playerScore are Numbers
// pickOverallWinner returns a String
function pickOverallWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        return "The computer has won the game.";
    } else if (playerScore > computerScore) {
        return "Congratulations! You've won the game!";
    } else {
        return "It was a draw. No-one won the game.";
    }
}

// Step 4 & 5: Play five rounds of the game, keep score
function playGame() {
    const CHOICES = ["rock", "paper", "scissors"];
    let roundsToPlay = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundsToPlay; i++) {
        let computerChoice = getComputerChoice(CHOICES);
        let playerChoice = getPlayerChoice(CHOICES)
        let result = checkWhoWon(playerChoice, computerChoice);

        if (result === "draw") {
            console.log("It's a draw.");
        } else if (result === "computer") {
            computerScore++;
            console.log(`Computer wins. ${computerChoice} beats ${playerChoice}`);
        } else {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }

        console.log(`Computer score: ${computerScore}\nPlayer score: ${playerScore}`);
    }

    let overallWinner = pickOverallWinner(computerScore, playerScore);
    console.log(overallWinner);
}

// Play the game
playGame();