// Business Logic
function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.activePlayer;
}

Game.prototype.switchActivePlayer = function() {
  if (this.playerOne.turn === true) {
    this.playerOne.turn = false;
    this.playerTwo.turn = true;
    this.activePlayer = this.playerTwo;
  } else if (this.playerTwo.turn === true) {
    this.playerTwo.turn = false;
    this.playerOne.turn = true;
    this.activePlayer = this.playerOne
  } else {
    this.activePlayer = this.playerOne;
    this.playerOne.turn = true;
  }
}; 

function Player(playerName) {
  this.playerName = playerName;
  this.currentRoll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = false;
}

Player.prototype.roll = function() {
  this.currentRoll = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.currentScoreAppend = function() {
  if (this.currentRoll === 1) {
    return this.changeTurn();
  } else {
    return this.currentScore += this.currentRoll;
  }
}

Player.prototype.hold = function() {
  this.currentScore += this.totalScore;
  this.changeTurn();
}

Player.prototype.checkScore = function() {
  if (this.totalScore === 100) {
    alert(this.playerName + "You Won!")
    this.endGame();
  }
}

Player.prototype.changeTurn = function() {
  this.currentScore = 0;
  this.turn = false;
}

Player.prototype.endGame = function() {
  this.playerName = null;
  this.currentRoll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = false;
}


// UI Logic
// window.onload = function(event) {
//   event.preventDefault();

//   document.querySelector("#new-game").addEventListener("click", this.endGame);
//   document.querySelector("#roll-dice").addEventListener("click", this.roll);
//   document.querySelector("#hold-dice").addEventListener("click", this.hold);

//   document.getElementsByClassName("display-dice-roll").innerText = this.roll();
//   document.getElementsByClassName("display-current-score").innerText = this.currentScore;
//   document.getElementsByClassName("player-one-score").innerText = this.totalScore;
//   document.getElementsByClassName("player-two-score").innerText = this.totalScore;

//   const newGame = new Game();
//   const player1 = new Player();
//   const player2 = new Player();
// }