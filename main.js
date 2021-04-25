var currentGame;

// I'm querying the same container... .middle-section and classicFighters...?
var battleMode = document.querySelector('#battleMode');
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
  startNewGame();
});

middleSection.addEventListener('click', function(event) {
  selectFighterView(event);
});

middleSection2.addEventListener('click', function(event) {
  selectFighterView(event);
})


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


function startNewGame() {
  currentGame = new Game();
}


function selectFighterView(event) {
    // play with adding dynamic value to changeHiddenViews function
      // Was hoping to pass in the id name of the selection
      // Which is the same as my queryselected var above
      // Doesn't work...cannot read property of null
    // console.log(event.target.closest('section').id);
    // var battleModeView = event.target.closest('section').id;
    // changeHiddenViews(battleModeView);
    changeGameView(event);
    currentGame.saveGameDetails(event);
}


function displayUpdatedWins(player1Wins, player2Wins) {
  humanScore.innerText = `Wins: ${player1Wins}`;
  computerScore.innerText = `Wins: ${player2Wins}`;
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
  // if (winner === "draw") {
  //   winnerBanner.innerText = `It's a Draw!`;
  // } else {
  //   winnerBanner.innerText = `The ${winner} Wins!!!`;
  // }
}


function endBattleModeView(gameChoice) {
  var currentFighterView;
  if (gameChoice === "classic") {
    currentFighterView = classicFighters;
  } else {
    currentFighterView = difficultFighters;
  }
  changeHiddenViews(battleMode, currentFighterView);
}


function changeHiddenViews() {
  for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
  }
}
