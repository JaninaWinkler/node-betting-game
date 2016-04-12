var prompt = require('prompt-sync')();
var colors = require('colors');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptForValue() {
  return prompt("Please enter a value between 5 and 10 that you want to bet: ");
}

function promptForNumber() {
  return prompt("Please enter a number between 1 and 10 that you want to bet on: ");
} 

function playGame(bankroll) {
  var randomNumber = +getRandomNumber(0, 10);
  var value = +promptForValue();
  if (value < 5 || value > 10) {
    console.log("Not a valid number!".red)
    var value = +promptForValue();
  }

  var userNumber = promptForNumber();
  if (userNumber < 1 || userNumber > 10) {
    console.log("Not a valid number!".red) 
    var userNumber = promptForNumber();
  }

  if (userNumber == randomNumber) {
    bankroll = bankroll + value;
    console.log(("Good job! You've gained $" + value).rainbow + (" and your bankroll is now $" + bankroll).green);
  }
  else if (userNumber == (randomNumber + 1) || userNumber == (randomNumber -1)) {
    console.log(("Almost! Because you were SO close, your bankroll stays at $" + bankroll).cyan);
  }
  else if (userNumber != randomNumber) {
    bankroll = bankroll - value;
    console.log(("Nope! You've lost $" + value + " and your bankroll is now $" + bankroll).red);
    bankroll = bankroll 
  }
  return bankroll;
}

function bettingGame() {

  var bankroll = 100;
  playing = true;

  while (playing) {  
    if (bankroll <= 0) {
      playing = false;
      console.log("Game Over. Sorry!".underline.red);
      break;
    } else {
      bankroll = playGame(bankroll);
    }
  }
}

bettingGame();