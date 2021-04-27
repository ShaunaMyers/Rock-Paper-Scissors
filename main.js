var currentGame;

var battleMode = document.querySelector('#battleMode');
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicFighters = document.querySelector('#classicFighters');
var computerScore = document.querySelector('#computerScore');
var difficultFighters = document.querySelector('#difficultFighters');
var gameSelection = document.querySelector('#gameSelection');
var humanScore = document.querySelector('#humanScore');
var middleSection = document.querySelector('.middle-section');
var middleSection2 = document.querySelector('.middle2-section');
var resetScoreBtn = document.querySelector('#resetScoreBtn');
var selectGame = document.querySelector('#selectGame');
var winnerBanner = document.querySelector('#winnerBanner');

window.onload = function() {
  currentGame = new Game();
  displaySavedWins();
  displayResetScoreBtn();
}


gameSelection.addEventListener('click', function(event){
  changeGameView(event);
  startNewGame(event);
});

// Refactor for only one event listener and event bubbling
middleSection.addEventListener('click', function(event) {
  selectFighterView(event);
});

middleSection2.addEventListener('click', function(event) {
  selectFighterView(event);
})

changeGameBtn.addEventListener('click', displayGameSelectionView);

resetScoreBtn.addEventListener('click', resetPlayersScore);


function changeGameView(event) {
  if (event.target.closest('button').id === 'classic') {
    changeHiddenViews(selectGame, classicFighters);
  } else {
    changeHiddenViews(selectGame, difficultFighters);
  }
}


function startNewGame(event) {
  currentGame.saveGameDetails(event);
  displayChangeGameBtn();
}


function displayChangeGameBtn() {
  changeHiddenViews(changeGameBtn);
}


function selectFighterView(event) {
  changeHiddenViews(eval(`${event.target.closest('div').id}Fighters`), battleMode);
  currentGame.saveGameDetails(event);
  displayResetScoreBtn();
}


function displaySavedWins() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
}


function displayUpdatedWins(playerName, playerWins) {
  if (playerName === 'human') {
    humanScore.innerText = `Wins: ${playerWins}`;
  } else {
    computerScore.innerText = `Wins: ${playerWins}`;
  }
}


function displayfighterChoices(winner, fighter1, fighter2) {
  battleMode.innerHTML = '';
  changeWinnerBanner(winner);
  battleMode.innerHTML += `
    <div class="game-images">
      <img src="assets/${fighter1}.png">
      <img src="assets/${fighter2}.png">
    </div>
  `;
  currentGame.resetBoard();
}


function changeWinnerBanner(winner) {
  if (winner === 'Draw') {
    battleMode.innerHTML = `
    <h4>It's a ${winner}!</h4>
    `;
  } else {
    battleMode.innerHTML = `
      <h4>${winner} Wins!!!</h4>
    `;
  }
}


function endBattleModeView(gameChoice) {
  var currentFighterView;
  if (gameChoice === "classic") {
    currentFighterView = classicFighters;
  } else {
    currentFighterView = difficultFighters;
  }
  changeHiddenViews(battleMode, currentFighterView);
  changeGameBtn.removeAttribute('disabled', '')
}


function displayGameSelectionView() {
  if (currentGame.mode === 'classic') {
    changeHiddenViews(classicFighters, selectGame, changeGameBtn);
  } else {
    changeHiddenViews(difficultFighters, selectGame, changeGameBtn);
  }
}

function displayResetScoreBtn() {
  if (currentGame.player1.wins || currentGame.player2.wins) {
    resetScoreBtn.classList.remove('hidden');
  }
}

function resetPlayersScore() {
  currentGame.resetGameScore();
  changeHiddenViews(resetScoreBtn);
}


function changeHiddenViews() {
  for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
  }
}
