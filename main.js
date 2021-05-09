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


window.onload = function() {
  currentGame = new Game();
  displaySavedWins();
  displayResetScoreBtn();
}


gameSelection.addEventListener('click', function(event) {
  changeGameView(event);
  startNewGame(event);
});


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
  var sectionName = event.target.closest('section').id;
  var buttonName = event.target.closest('button').id;
  currentGame.saveGameDetails(sectionName, buttonName);
  displayChangeGameBtn();
}


function displayChangeGameBtn() {
  changeHiddenViews(changeGameBtn);
}


function selectFighterView(event) {
  var sectionName = event.target.closest('section').id;
  var buttonName = event.target.closest('button').id;
  changeHiddenViews(eval(`${event.target.closest('div').id}Fighters`), battleMode);
  currentGame.saveGameDetails(sectionName, buttonName);
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


function displayfighterChoices(winner, player1, player2) {
  battleMode.innerHTML = '';
  changeWinnerBanner(winner, player1, player2);
  battleMode.innerHTML += `
    <div class="game-images">
      <img src="assets/${player1.fighter}.png">
      <img src="assets/${player2.fighter}.png">
    </div>
  `;
  currentGame.resetBoard();
}


function changeWinnerBanner(winner, player1, player2) {
  if (winner === 'Draw') {
    battleMode.innerHTML = `
    <div class="winner-banner">
      <img class="score-box-img" src=${player1.token} alt="Human image">
      <img class="score-box-img" src=${player2.token} alt="Laptop image">
    </div>
    <h2>It's a ${winner}!</h2>
    `;
  } else {
    displayPlayerTokens(winner, player1, player2);
    battleMode.innerHTML += `
      <h2>${winner} Wins!!!</h2>
    `;
  }
}


function displayPlayerTokens(winner, player1, player2) {
  if (winner === 'Human') {
    battleMode.innerHTML = `
    <div class="winner-banner">
      <img class="score-box-img" src=${player1.token} alt="Human image">
    </div>
    `
  } else {
    battleMode.innerHTML = `
    <div class="winner-banner">
      <img class="score-box-img" src=${player2.token} alt="Laptop image">
    </div>
    `
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
  if (parseInt(currentGame.player1.wins) || parseInt(currentGame.player2.wins)) {
    currentGame.player2.wins);
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
