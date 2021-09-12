// rock beats scissors
// paper beats rock
// scissors beats paper

// Create variable choicesArr of type Array that starts with the values: rock, paper, scissors
const CHOICES = ["rock", "paper", "scissors"];

// Step 1: Computer chooses from rock, paper or scissors
// getComputerChoice is a function that takes choicesArr as a parameter
// choicesArr is an array
function getComputerChoice(CHOICES) {
    // Create variable computerChoice of type String that starts with a blank string
    let computerChoice = "";
    // Create variable randNum of type Integer that starts with a random number between 0 and length of choicesArr
    let randNum = Math.floor(Math.random() * CHOICES.length);
    // Assign value at position of randNum in choicesArr to computerChoice
    computerChoice = CHOICES[randNum];
    // return computerChoice
    return computerChoice;
}


// Step 2: Player chooses from rock, paper or scissors
// getPlayerChoice is a function that takes choicesArr as a parameter
// choicesArr is an array
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
        playerInput = prompt(`Your selection: ${playerInput} is not valid.\nPlease choose from: rock, paper or scissors`);
        playerInput = playerInput.toLowerCase();
    }

    // return playerInput
    return playerInput;
}


// Step 3: Check who won

// checkWhoWon is a function that takes playerChoice and computerChoice as parameters
// playerChoice and computerChoice are Strings

// if computerChoice and playerChoice are the same
// draw
// if computerChoice is rock and playerChoice is scissors
// computer wins
// if computerChoice is paper and playerChoice is rock
// computer wins
// if computerChoice is scissors and playerChoice is paper
// computer wins
// else players wins


// Put it all together
console.log(`Computer: ${getComputerChoice(CHOICES)}`);
console.log(`Player: ${getPlayerChoice(CHOICES)}`);
// checkWhoWon();