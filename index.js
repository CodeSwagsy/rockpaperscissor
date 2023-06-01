let readlineSync = require("readline-sync");
let rps = ["rock", "paper", "scissor"];
let wins = 0;
let draws = 0;
let loses = 0;
let roundsPlayed = 0;
let abort;

console.clear();

console.log("Let's play a little Rock-Paper-Scissors game.");
let rounds = readlineSync.questionInt("How many rounds do u want to play? ");

while (roundsPlayed < rounds) {
  let input = Math.ceil(Math.random() * 3);

  if (input === 1) {
    input = "rock";
  } else if (input === 2) {
    input = "paper";
  } else if (input === 3) {
    input = "scissor";
  }

  let myInput = readlineSync.keyInSelect(rps, "Chose something");
  if (rps[myInput] === undefined) {
    abort = true;
    break;
  } else {
    console.log(`\nYou chose: ${rps[myInput]}`);
    console.log(`Computer has chosen: ${input}\n`);

    if (rps[myInput] === input) {
      console.log(`Draw.`);
      console.log(`\n------------------------------------`);
      roundsPlayed++;
      draws++;
    } else if (
      (rps[myInput] === "rock" && input === "scissor") ||
      (rps[myInput] === "paper" && input === "rock") ||
      (rps[myInput] === "scissor" && input === "paper")
    ) {
      console.log(`You won this round! Congratulations :)`);
      console.log(`\n------------------------------------`);
      roundsPlayed++;
      wins++;
    } else {
      console.log(`You lost this round :(`);
      console.log(`\n------------------------------------`);
      roundsPlayed++;
      loses++;
    }
  }
}

if (abort === true) {
console.log(`\n\nGame cancelled. You played ${roundsPlayed} rounds. Wins: ${wins}, loses: ${loses}, draws: ${draws}.`);
} else if (wins > loses) {
  console.log(`\n\nYour game is over! \n\nYou beat the shit out of the computer. Wins: ${wins}, loses: ${loses}, draws: ${draws}.`);
} else if (wins < loses) {
  console.log(`\n\nYour game is over! \n\nLoser! The machine has beaten you. Wins: ${wins}, loses: ${loses}, draws: ${draws}.`);
} else {
  console.log(`\n\nLet's call it a draw! \n\nWins: ${wins}, loses: ${loses}, draws: ${draws}.`);
}