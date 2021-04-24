var currentGame;

var classicFighters = document.querySelector('#classicFighters');
var difficultFighters = document.querySelector('#difficultFighters');
var selectGame = document.querySelector('#selectGame');
var gameSelection = document.querySelector('#gameSelection');
var middleSection = document.querySelector('.middle-section');

gameSelection.addEventListener('click', function(event) {
  changeGameMode(event);
});

middleSection.addEventListener('click', function(event) {
  selectFighterView(event);
});


function changeGameView(event) {
  if (event.target.closest('button').id === 'classic') {
    toggleHidden(selectGame, classicFighters);
  } else if (event.target.closest('button').id === 'difficult') {
    toggleHidden(selectGame, difficultFighters);
  } else if (event.target.closest('section').id === 'classicFighters') {
    toggleHidden(classicFighters)
  } else {
    toggleHidden(difficultFighters);
  }
}


  function selectFighterView(event) {
    // play with adding dynamic value to toggleHidden function
      // Was hoping to pass in the id name of the selection
      // Which is the same as my queryselected var above
      // Doesn't work...cannot read property of null

    // console.log(event.target.closest('section').id);
    // var battleModeView = event.target.closest('section').id;
    // toggleHidden(battleModeView);

    changeGameView(event);
    
    // I think I need to absolutely instantiate a new Game in order to pass the logic into Game
      // So that I can instantiate player1 & 2 in Game
      // Tutor said I need to do this and it appears that way on the rubric
    currentGame = new Game();
    currentGame.saveGameDetails1(event);

  }


  function toggleHidden() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
    }
  }
