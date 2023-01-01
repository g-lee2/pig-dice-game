// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.

const rollPlayer1 = document.querySelector('#player1Roll');
const rollPlayer2 = document.querySelector('#player2Roll');

const rollBtnPlayer1 = document.querySelector('#roll-p1');
const rollBtnPlayer2 = document.querySelector('#roll-p2');


// Scores
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;
let playerOneRoundScore = 0;
let playerTwoRoundScore = 0;

// Get random number between 1-6 when roll dice button is clicked
function rollDicePlayerOne() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const randomDiceNumb = Math.floor(Math.random() * (max - min) + min);
  console.log(randomDiceNumb);
  if (randomDiceNumb === 1) {
    console.log('its a one!');
    rollBtnPlayer1.setAttribute("disabled", "");
    rollBtnPlayer2.removeAttribute("disabled");
    rollPlayer1.textContent = 'ROLL';
    console.log('switched!');
  } else {
    rollPlayer1.textContent = randomDiceNumb;
  }
}

// Get random number between 1-6 when roll dice button is clicked
function rollDicePlayerTwo() {
  min = Math.ceil(1);
  max = Math.floor(7);
  const randomDiceNumb = Math.floor(Math.random() * (max - min) + min);
  console.log(randomDiceNumb);
  if (randomDiceNumb === 1) {
    console.log('its a one!');
    rollBtnPlayer2.setAttribute("disabled", "");
    rollBtnPlayer1.removeAttribute("disabled");
    rollPlayer2.textContent = 'ROLL';
    console.log('switched!');
  } else {
    rollPlayer2.textContent = randomDiceNumb;
  }
}
