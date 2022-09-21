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

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
function Player(playerName) {
  this.playerName = playerName;
  this.currentRoll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = false;
}

Player.prototype.roll = function() {
  this.currentRoll = rollDice();
  return this.currentRoll;
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
  if (this.totalScore >= 100) {
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
window.addEventListener("load", function() {
  document.getElementById("player-name").removeAttribute("class");
  document.querySelector("form").addEventListener("submit", handleGame);
  document.getElementById("new-game").addEventListener("click", this.endGame);
  document.getElementById("roll-dice").addEventListener("click", this.roll);
  document.getElementById("hold-dice").addEventListener("click", this.hold);
});

function handleGame(event) {
  event.preventDefault();
  const newGame = new Game();
  const player1 = new Player();
  const player2 = new Player();
  document.getElementById("player-name").setAttribute("class", "hidden");
  document.getElementById("player-one-name").value = player1.playerName;
  document.getElementById("player-two-name").value = player2.playerName;
  
  document.getElementsByClassName("display-dice-roll").innerText = this.roll;
  document.getElementsByClassName("display-current-score").innerText = this.currentScore;
  document.getElementsByClassName("player-one-score").innerText = this.totalScore;
  document.getElementsByClassName("player-two-score").innerText = this.totalScore;
}