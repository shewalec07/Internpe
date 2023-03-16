let playerScores = [0, 0]; // array to store the scores of each player
let activePlayer = 0; // index of the player whose turn it is
let turnTotal = 0; // variable to store the score of the active player's current turn

function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1; // generate a random number between 1 and 6
  if (roll === 1) {
    turnTotal = 0; // if the roll is a 1, reset the turn total to 0 and end the turn
    endTurn();
  } else {
    turnTotal += roll; // add the roll to the turn total
    document.getElementById("turn-total").innerHTML = turnTotal; // display the turn total on the webpage
  }
}

function hold() {
  playerScores[activePlayer] += turnTotal; // add the turn total to the active player's score
  document.getElementById("score-" + activePlayer).innerHTML = playerScores[activePlayer]; // display the updated score on the webpage
  if (playerScores[activePlayer] >= 100) {
    endGame(); // if the active player's score is 100 or more, end the game
  } else {
    endTurn(); // otherwise, end the turn and switch to the next player
  }
}

function endTurn() {
  turnTotal = 0; // reset the turn total to 0
  document.getElementById("turn-total").innerHTML = turnTotal; // display the turn total on the webpage
  document.getElementById("player-" + activePlayer).classList.remove("active"); // remove the "active" class from the current player's section on the webpage
  activePlayer = (activePlayer + 1) % 2; // switch to the next player (0 if the current player is 1, 1 if the current player is 0)
  document.getElementById("player-" + activePlayer).classList.add("active"); // add the "active" class to the next player's section on the webpage
}

function endGame() {
  document.getElementById("turn-total").innerHTML = "GAME OVER!"; // display "GAME OVER!" in place of the turn total on the webpage
  document.getElementById("roll-button").disabled = true; // disable the roll button
  document.getElementById("hold-button").disabled = true; // disable the hold button
}
