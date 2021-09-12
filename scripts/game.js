// Step 1: Computer chooses from rock, paper or scissors
// getComputerChoice is a function that takes choicesArr as a parameter
// choicesArr is an Array
// getComputerChoice returns a String
function getComputerChoice(CHOICES) {
    // Create variable computerChoice of type String that starts with a blank string
    let computerChoice = "";
    // Create variable randNum of type Number that starts with a random number between 0 and length of choicesArr
    let randNum = Math.floor(Math.random() * CHOICES.length);
    // Assign value at position of randNum in choicesArr to computerChoice
    computerChoice = CHOICES[randNum];
    // return computerChoice
    return computerChoice;
}


// Step 2: Player chooses from rock, paper or scissors
// getPlayerChoice is a function that takes choicesArr as a parameter
// choicesArr is an array
// getPlayerChoice returns a String
function getPlayerChoice(CHOICES) {
    // Create variable playerInput of type String that starts with a blank string
    let playerInput = "";
    // Output what options the player has to select from
    // Ask player which option they select and store in playerInput
    playerInput = prompt("Please choose from: rock, paper or scissors");
    // Convert playerInput to lowercase
    playerInput = playerInput.toLowerCase();

    // while playerInput is not in choicesArr
    while (!CHOICES.includes(playerInput)) {
        // ask user again for selection
        playerInput = prompt(`Your selection "${playerInput}" is not valid.\nPlease choose from: rock, paper or scissors`);
        playerInput = playerInput.toLowerCase();
    }

    // return playerInput
    return playerInput;
}


// Step 3: Check who won
// checkWhoWon is a function that takes playerChoice and computerChoice as parameters
// playerChoice and computerChoice are Strings
// checkWhoWon returns a String
function checkWhoWon(playerChoice, computerChoice) {
    // If computerChoice and playerChoice are the same
    if (playerChoice === computerChoice) {
        // draw
        return "draw";
        // If computerChoice is rock and playerChoice is scissors
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        // Computer wins
        return "computer";
        // If computerChoice is paper and playerChoice is rock
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        // computer wins
        return "computer";
        // If computerChoice is scissors and playerChoice is paper
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        // Computer wins
        return "computer";
    }
    return "player";
}

// Step 6: Determine an overall winner
// pickOverallWinner is a function that takes computerScore and playerScore as parameters
// computerSCore and playerScore are Numbers
// pickOverallWinner returns a String
function pickOverallWinner(computerScore, playerScore) {
    // If computerScore is greater than playerScore
    if (computerScore > playerScore) {
        // Computer wins the game
        return "The computer has won the game.";
        // Otherwise, if playerScore is greater than computerScore
    } else if (playerScore > computerScore) {
        // Player wins the game
        return "Congratulations! You've won the game!";
        // If it's a draw
    } else {
        // Output "It's a draw, no-one won the game"
        return "It was a draw. No-one won the game.";
    }
}

// Step 4 & 5: Play five rounds of the game, keep score
function game() {
    // Create variable choicesArr of type Array that starts with the values: rock, paper, scissors
    const CHOICES = ["rock", "paper", "scissors"];
    // Create a variable roundsToPlay of type Number that starts with the value 5
    let roundsToPlay = 5;
    // Create variables playerScore and computerScore of type Number that start with the value 0
    let playerScore = 0;
    let computerScore = 0;

    // Begin with i at 0 and add 1 to i on each pass until i is equal to or greater than roundsToPlay
    for (let i = 0; i < roundsToPlay; i++) {
        // Inside loop, determine computer and player choices, and the round winner
        let computerChoice = getComputerChoice(CHOICES);
        // console.log(`Computer: ${computerChoice}`);

        let playerChoice = getPlayerChoice(CHOICES)
        // console.log(`Player: ${playerChoice}`);

        let result = checkWhoWon(playerChoice, computerChoice);

        // If result is equal to "draw"
        if (result === "draw") {
            // Output "It's a draw."
            console.log("It's a draw.");
            // Othewise, if result is equal to "computer"
        } else if (result === "computer") {
            // Increase computerScore by 1
            computerScore++;
            // Output "Computer wins"
            console.log(`Computer wins. ${computerChoice} beats ${playerChoice}`);
            // Otherwise, if result is equal to "player"
        } else {
            // Increase playerScore by 1
            playerScore++;
            // Output "You win!"
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }

        console.log(`Computer score: ${computerScore}\nPlayer score: ${playerScore}`);
    }
    // Create variable overallWinner of type String to hold result of pickOverallWinner
    let overallWinner = pickOverallWinner(computerScore, playerScore);
    console.log(overallWinner);
}

// Play the game
game();