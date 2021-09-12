// rock beats scissors
// paper beats rock
// scissors beats paper

// Create variable choicesArr of type Array that starts with the values: rock, paper, scissors
const CHOICES = ["rock", "paper", "scissors"];

// Step 1: Computer chooses from rock, paper or scissors
// getComputerChoice is a function that takes choicesArr as a parameter
// choicesArr is an array
// getComputerChoice returns a string
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
// getPlayerChoice returns a string
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
// checkWhoWon returns a string
function checkWhoWon(playerChoice, computerChoice) {
    // Create variable playerWins of type Boolean with start value of true
    let playerWins = true;

    // if computerChoice and playerChoice are the same
    if (playerChoice === computerChoice) {
        // draw
        return "It's a draw!"
        // if computerChoice is rock and playerChoice is scissors
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        // computer wins
        playerWins = false;
        // if computerChoice is paper and playerChoice is rock
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        // computer wins
        playerWins = false;
        // if computerChoice is scissors and playerChoice is paper
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        // computer wins
        playerWins = false;
    }

    // if the player wins
    if (playerWins) {
        // then return: "You win! playerChoice beats computerChoice"
        return `You win! ${playerChoice} beats ${computerChoice}.`
    } else {
        // otherwise, return "Computer wins! computerChoice beats playerChoice"
        return `Computer wins. ${computerChoice} beats ${playerChoice}.`
    }
}


// Step 4: Play five rounds of the game, keep score and determine an overall winner
function game() {
    // Create a variable roundsToPlay of type Number that starts with the value 5
    let roundsToPlay = 5;

    // Begin with i at 0 and add 1 to i on each pass until i is equal to or greater than roundsToPlay
    for (let i = 0; i < roundsToPlay; i++) {
        // Inside loop, determine computer and player choices, and the round winner
        let computerChoice = getComputerChoice(CHOICES)
        console.log(`Computer: ${computerChoice}`);

        let playerChoice = getPlayerChoice(CHOICES)
        console.log(`Player: ${playerChoice}`);

        let result = checkWhoWon(playerChoice, computerChoice);
        console.log(result);
    }
}