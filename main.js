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
  selectFighter1(event);
});


function changeGameMode(event) {
  if (event.target.closest('button').id === 'classic') {
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

    // I want to get this id and use it as the variable name (above in my query selectors) to toggle views
    // Can I do this?
    // Can't get it to work right now
    console.log(event.target.closest('section').id); // I get the correct id name...classicFighters or difficultFighters
    var battleModeView = event.target.closest('section').id;
    console.log(typeof battleModeView); // A string...this is why I can't use this as the variable name?
    // toggleHidden(`${whatIsReturned}`);
    // toggleHidden(`${event.target.closest('section').id}`)


    var tokenChoice1 = event.target.closest('button').id;
    var gameChoice = event.target.closest('div').id;
    console.log('1', gameChoice);
    var player1 = new Player('human', tokenChoice1)

    // Another function invoked
    // invoke takeTurn method...do I need to declare player2 here? or in takeTurn?
    selectFighter2(player1, gameChoice)
  }

  function selectFighter2(player1, gameChoice) {
    var tokens = ['rock', 'paper', 'scissors', 'plant', 'llama'];

    // Is this what the takeTurn method is supposed to do?
      // Generate a random token inside takeTurn?
      // I don't believe I should instantiate a new instance of player there, though
    var tokenChoice2 = tokens[getRandomIndex(tokens)];
    var player2 = new Player('computer', tokenChoice2);

    currentGame = new Game(player1, player2);
    currentGame.evaluateWinner(gameChoice);
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function toggleHidden() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
    }
  }
