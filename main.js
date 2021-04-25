var currentGame;

// I'm querying the same container... .middle-section and classicFighters...?
var battleMode = document.querySelector('#battleMode');
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicFighters = document.querySelector('#classicFighters');
var computerScore = document.querySelector('#computerScore');
var difficultFighters = document.querySelector('#difficultFighters');
var gameSelection = document.querySelector('#gameSelection');
var humanScore = document.querySelector('#humanScore');
var middleSection = document.querySelector('.middle-section');
var middleSection2 = document.querySelector('.middle2-section');
var selectGame = document.querySelector('#selectGame');
var winnerBanner = document.querySelector('#winnerBanner');


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


function changeGameView(event) {
  if (event.target.closest('button').id === 'classic') {
    changeHiddenViews(selectGame, classicFighters);
  } else if (event.target.closest('button').id === 'difficult') {
    changeHiddenViews(selectGame, difficultFighters);
  } else if (event.target.closest('section').id === 'classicFighters') {
    changeHiddenViews(classicFighters, battleMode);
  } else {
    changeHiddenViews(difficultFighters, battleMode);
  }
}


function startNewGame(event) {
  currentGame = new Game();
  currentGame.saveGameDetails(event);
  displayChangeGameBtn();
}


function displayChangeGameBtn() {
  changeHiddenViews(changeGameBtn);
}

// How do I use the event.target.id dynamically???
  // I want to use it as the first part of classicFighters
  // and difficultFighters views
    // e.g. changeHiddenViews(`${event.target.closest('div').id}Fighters`)
    // When I've tried different variations of this I get error in console
      // Seems to be unable to recognize the element that I'm trying to target
      // Variable with querySelector (above) has the exact name as the string that should be returned from line 61: classicFighters or difficultFighters

function selectFighterView(event) {
    changeGameView(event);
    currentGame.saveGameDetails(event);
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


function changeHiddenViews() {
  for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
  }
}
