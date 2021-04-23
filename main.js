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
  // var gameChoice = event.target.closest('button').id;
  // return gameChoice;
  // place this in Game class??? in method that updates game type later?
  currentGame = new Game(gameChoice);
  console.log(currentGame);
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
        // May want to build in return true or false
          // or pass the game choice to that function s
            // Maybe then I can instantiate the Game class instead of above
          // This is so this function can be called from choose fighter
          // it
        toggleHidden(gameSelection, difficultFighters);
      // If gamechoice equals dificult
        // Hide gameSelection view
        // Unhide difficult fighters view
        toggleHidden(gameSelection, difficultFighters);
  }

  function chooseFighter(event) {
    var tokenChoice = event.target.closest('button').id;
    var gameChoice = event.target.closest('div').id;
    var player1 = new Player('human', tokenChoice)
    // invoke takeTurn method...do I need to declare player2 here? or in takeTurn?
    console.log(tokenChoice);
    console.log(gameChoice);
  }

  function toggleHidden() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].classList.toggle('hidden');
    }
  }
