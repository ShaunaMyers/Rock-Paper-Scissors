var currentGame;

var classicFighters = document.querySelector('#classicFighters');
var difficultFighters = document.querySelector('#difficultFighters');
var selectGame = document.querySelector('#selectGame');
var gameSelection = document.querySelector('#gameSelection');
var middleSection = document.querySelector('.middle-section');
var middleSection2 = document.querySelector('.middle2-section');

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
  }
  // else if (event.target.closest('section').id === 'classicFighters') {
  //   changeHiddenViews(classicFighters);
  // } else {
  //   changeHiddenViews(difficultFighters);
}

function startNewGame() {
  currentGame = new Game();
}


function selectFighterView(event) {
  console.log('hi select fighter has been invoked');
  console.log('diff ID', event.target.closest('div').id);
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


function showfighterChoices(player1, player2) {
  middleSection.innerHTML = '';
}


// function endBattleModeView() {
//   changeHiddenViews(difficultFighters, selectGame);
// }


function changeHiddenViews() {
  for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
  }
}
