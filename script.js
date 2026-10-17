function getComputerChoice() {
  let number = Math.random();
  if (number < 1 / 3) {
    return "rock";
  } else if (number < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let lowerCaseHuman = humanChoice.toLowerCase();

    if (
      (lowerCaseHuman === "rock" && computerChoice === "rock") ||
      (lowerCaseHuman === "paper" && computerChoice === "paper") ||
      (lowerCaseHuman === "scissors" && computerChoice === "scissors")
    ) {
      console.log("it's a tie!");
    } else if (
      (lowerCaseHuman === "rock" && computerChoice === "scissors") ||
      (lowerCaseHuman === "paper" && computerChoice === "rock") ||
      (lowerCaseHuman === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("Human is winner in this round!");
    } else {
      computerScore++;
      console.log("Computer is winner in this round!");
    }
  }

  for (let i = 1; i <= 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Human won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("the game is a tie!");
  }
}

playGame();
