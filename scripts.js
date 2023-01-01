// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins

const rollPlayer1 = document.querySelector('#player1Roll');
const rollPlayer2 = document.querySelector('#player2Roll');

const holdBtnPlayer1 = document.querySelector('.hold-btn-p1');
const holdBtnPlayer2 = document.querySelector('.hold-btn-p2');

const rollBtnPlayer1 = document.querySelector('#roll-p1');
const rollBtnPlayer2 = document.querySelector('#roll-p2');

const player1ScoreTotal = document.getElementById('player1Score');
const player2ScoreTotal = document.getElementById('player2Score');

const player1RoundScore = document.getElementById('player1Round');
const player2RoundScore = document.getElementById('player2Round');

const result = document.getElementById('resultTest');

const resetBtn = document.querySelector('i');


// Scores
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;
let playerOneRoundScore = 0;
let playerTwoRoundScore = 0;

// Get random number between 1-6 when roll dice button is clicked (player one)
function rollDicePlayerOne() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const randomDiceNumb = Math.floor(Math.random() * (max - min) + min);
  // Checks to see if number rolled was one or not
  if (randomDiceNumb === 1) {
    rollPlayer1.textContent = randomDiceNumb;
    rollBtnPlayer1.setAttribute("disabled", "");
    holdBtnPlayer1.setAttribute("disabled", "");
    rollBtnPlayer2.removeAttribute("disabled");
    holdBtnPlayer2.removeAttribute("disabled");
    playerOneRoundScore = 0;
    player1RoundScore.textContent = playerOneRoundScore + ' -';
    result.textContent = "Player two's turn!"
  } else {
    playerOneRoundScore += randomDiceNumb;
    rollPlayer1.textContent = randomDiceNumb;
    player1RoundScore.textContent = playerOneRoundScore + ' -'; 
  } 
}

// When the player 1 presses hold dice button
function holdDicePlayerOne() {
  playerOneTotalScore += playerOneRoundScore;
  player1ScoreTotal.textContent = playerOneTotalScore;
  playerOneRoundScore = 0;
  player1RoundScore.textContent = playerOneRoundScore + ' -';
  rollPlayer1.textContent = `0 `;
if (playerOneTotalScore >= 100) {
    result.textContent = "Player two is the winner! Press the reset button to play again!";
    rollBtnPlayer1.setAttribute("disabled", "");
    holdBtnPlayer1.setAttribute("disabled", "");
    rollBtnPlayer2.setAttribute("disabled", "");
    holdBtnPlayer2.setAttribute("disabled", "");
  } else {
    result.textContent = "Player two's turn!"
    rollBtnPlayer1.setAttribute("disabled", "");
    holdBtnPlayer1.setAttribute("disabled", "");
    rollBtnPlayer2.removeAttribute("disabled");
    holdBtnPlayer2.removeAttribute("disabled");
  }
}

// Get random number between 1-6 when roll dice button is clicked (player two)
function rollDicePlayerTwo() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const randomDiceNumb = Math.floor(Math.random() * (max - min) + min);
  console.log(randomDiceNumb);
  // Checks to see if number rolled was one or not
  if (randomDiceNumb === 1) {
    rollPlayer2.textContent = randomDiceNumb;
    rollBtnPlayer2.setAttribute("disabled", "");
    holdBtnPlayer2.setAttribute("disabled", "");
    rollBtnPlayer1.removeAttribute("disabled");
    holdBtnPlayer1.removeAttribute("disabled");
    playerTwoRoundScore = 0;
    player2RoundScore.textContent = playerTwoRoundScore + ' -';
    result.textContent = "Player one's turn!"
  } else {
    playerTwoRoundScore += randomDiceNumb;
    rollPlayer2.textContent = randomDiceNumb;
    player2RoundScore.textContent = playerTwoRoundScore + ' -';
  } 
}

// When the player 2 presses hold dice button
function holdDicePlayerTwo() {
  playerTwoTotalScore += playerTwoRoundScore;
  player2ScoreTotal.textContent = playerTwoTotalScore;
  playerTwoRoundScore = 0;
  player2RoundScore.textContent = playerTwoRoundScore + ' -';
  rollPlayer2.textContent = `0 `;
  if (playerTwoTotalScore >= 100) {
    result.textContent = "Player two is the winner! Press the reset button to play again!";
    rollBtnPlayer1.setAttribute("disabled", "");
    holdBtnPlayer1.setAttribute("disabled", "");
    rollBtnPlayer2.setAttribute("disabled", "");
    holdBtnPlayer2.setAttribute("disabled", "");
  } else {
    result.textContent = "Player one's turn!"
    rollBtnPlayer2.setAttribute("disabled", "");
    holdBtnPlayer2.setAttribute("disabled", "");
    rollBtnPlayer1.removeAttribute("disabled");
    holdBtnPlayer1.removeAttribute("disabled");
  }
}

// Reset game function
function resetGame() {
  playerOneTotalScore = 0;
  playerTwoTotalScore = 0;
  playerOneRoundScore = 0;
  playerTwoRoundScore = 0;
  player1ScoreTotal.textContent = playerOneTotalScore;
  player2ScoreTotal.textContent = playerTwoTotalScore;
  result.textContent = "Player one starts!"
  rollPlayer1.textContent = `0 `;
  rollPlayer2.textContent =`0 `;
  rollBtnPlayer2.setAttribute("disabled", "");
  holdBtnPlayer2.setAttribute("disabled", "");
  rollBtnPlayer1.removeAttribute("disabled");
  holdBtnPlayer1.removeAttribute("disabled");
}

resetBtn.addEventListener('click', resetGame);
