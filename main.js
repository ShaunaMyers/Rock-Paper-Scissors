var currentGame;

// Utilize event bubbling
// event listener on div

var gameSelection = document.querySelector('#gameSelection');
var middleSection = document.querySelector('#middleSection');

gameSelection.addEventListener('click', function(event) {
  chooseGameMode(event);
});

middleSection.addEventListener('click', function(event) {
  chooseFighter(event);
});



function chooseGameMode(event) {
  // What do I want to do here?
  // Necessary to store this data in Game class
  // ****This affects how the game is played ***
  var gameChoice = event.target.closest('button').id;
  currentGame = new Game(gameChoice);
  // I could save the gameChoice and pass it into the next function
  gameModeSelection(gameChoice);
  // Invoke function that hides this gameSelection views
    // Brings up choose your fighter view
    // Player1 then selects Fighter
      // These need to be buttons
      // Instantiate new Player1
      // Save value of token selected in player1 instance
      // Save name as Human in player1 instance


  // Invoke function that selects the type of game, which is necessary for fighter selection
    // Fighter selection has two different views
      // Invoke different function for this?
      // Necessary for which screen appears
      // Classic and difficult
      // But this is all on the DOM
  }

  function gameModeSelection(gameChoice) {
    // Create toggleHidden function to send in arguments to hide views
    // This is better than a lot of bulky classList add and remove repetitive code
      // If gameChoice equals classic
        // Hide gameSelection view
        // Unhide classic fighters view
        toggleHidden(gameSelection, classicFighters);
      // If gamechoice equals dificult
        // Hide gameSelection view
        // Unhide difficult fighters view
        toggleHidden(gameSelection, difficultFighters);
  }

  function chooseFighter(event) {
    var tokenChoice = event.target.closest('button').id;
    console.log(tokenChoice);
  }

  function toggleHidden() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
    }
  }
