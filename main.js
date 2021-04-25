var currentGame;

// Utilize event bubbling
// event listener on div
var classicFighters = document.querySelector('#classicFighters');
var difficultFighters = document.querySelector('#difficultFighters');
var selectGame = document.querySelector('#selectGame');
var gameSelection = document.querySelector('#gameSelection');
var middleSection = document.querySelector('.middle-section');

gameSelection.addEventListener('click', function(event) {
  changeGameMode(event);
});

middleSection.addEventListener('click', function(event) {
  selectFighter1(event);
});



function changeGameMode(event) {

  // Invoke function that hides this gameSelection view
  // Brings up choose your fighter view

  if (event.target.closest('button').id === 'classic') {
    // still need to query these elements...but don't focus on the DOM yet
    toggleHidden(selectGame, classicFighters);
  } else {
    toggleHidden(selectGame, difficultFighters);
  }
}
  // Player1 then selects Fighter
  // Instantiate new Player1
  // Save value of token selected in player1 instance
  // Save name as Human in player1 instance


  function selectFighter1(event) {
    var tokenChoice1 = event.target.closest('button').id;
    var gameChoice = event.target.closest('div').id;
    var player1 = new Player('human', tokenChoice1)
    // Another function invoked
    // invoke takeTurn method...do I need to declare player2 here? or in takeTurn?
    selectFighter2(player1)
  }

  function selectFighter2(player1) {
    var tokens = ['rock', 'paper', 'scissors', 'plant', 'llama'];
    var tokenChoice2 = tokens[getRandomIndex(tokens)];
    var player2 = new Player('computer', tokenChoice2);
    currentGame = new Game(player1, player2);
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function toggleHidden() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
    }
  }
