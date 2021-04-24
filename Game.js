class Game {
  constructor() {
    this.player1 = new Player('human', '👩🏻‍🌾');
    this.player2 = new Player('computer', '🖥');
    this.mode = '';

  }

// player instances here
  saveGameDetails1(event) {
    var selectedFighter = event.target.closest('button').id;
    var gameChoice = event.target.closest('div').id;
    this.mode = gameChoice;
    console.log('MODE', gameChoice);
    this.player1.changePlayerDetails(selectedFighter);
  }

  changePlayer2Details(selectedFighter2) {
    this.player2.takeTurn();
    // this.evaluateWinner();
  }

// Game choice has been rerouted...alter this below...think more about this
// What calls evaluateWinner?
  evaluateWinner(fighter1, fighter2) {
    console.log('HERE', fighter1, fighter2);
    if (this.mode === 'classic') {
      this.classicWinner(fighter1, fighter2)
    }  else {
      this.difficultWinner(fighter1, fighter2);
    }
  }

  classicWinner(fighter1, fighter2) {
    if (fighter1 === fighter2) {
      // This will probably invoke a function that changes innertext
      console.log(`It's a draw!`);
      return "It's a draw!"
    } else if ((fighter1 === 'rock' && fighter2 === 'scissors') || (fighter1 === 'paper' && fighter2 === 'rock') || (fighter1 === 'scissors' && fighter2 === "paper")) {
      this.player1.updateWins();
    } else {
      this.player2.updateWins();
    }
  }


  difficultWinner(fighter1, fighter2) {
    // Can you do this???
    // Might have to change this all back to stating: e.g. fighter2 === 'scissors' || fighter2 === 'rock'
    // Trying to shorten this now but may not work...other version in note app!
    if (fighter1 === fighter2) {
      return `It's a draw!` // invoke function that changes innertext instead
    } else if ((fighter1 === 'rock' && (fighter2 === 'scissors' || fighter2 === 'paper')) || (fighter1 === 'paper' && (fighter2 === 'rock' || fighter2 === 'llama')) || (fighter1 === 'scissors' && (fighter2 === 'paper' || fighter2 === 'plant')) || (fighter1 === 'plant' && (fighter2 === 'paper' || fighter2 === 'llama')) || (fighter1 === 'llama' && (fighter2 === 'scissors' || fighter2 === 'rock'))) {
      this.player1.updateWins();
    } else {
      this.player2.updateWins();
    }

  //
  // resetBoard() {
  //   // This function changes view back to either classic or difficult
  //     // So...I need logic to evaluate what this.mode is
  //   // I need to hide classic and diff fighter views
  //     // I need display the player1 and player2 on the DOM
  //
  //   if (this.mode === 'classic') {
  //     toggleHidden(classicFighters);
  //   } else {
  //     toggleHidden(difficultFighters);
  //   }
  //
  // }
  }
}
