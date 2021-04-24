class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.mode = '';
  }

// player instances here
  saveGameDetails1(event) {
    var fighterChoice1 = event.target.closest('button').id;
    // Do I need these lines here? Because I could just pass in fighter and reuse this function for player2
    var gameChoice = event.target.closest('div').id;
    this.mode = gameChoice;
    console.log('1', gameChoice);
    var player1 = new Player('human', '👩🏻‍🌾', fighterChoice1)
    this.player1 = player1;
    player1.takeTurn()
  }

  saveGameDetails2(fighterChoice2) {
    var player2 = new Player('computer', '🖥', fighterChoice2)
    this.player2 = player2;
    this.evaluateWinner();
  }

// Game choice has been rerouted...alter this below...think more about this
// What calls evaluateWinner?
  evaluateWinner() {
    var fighter1 = this.player1.fighter;
    var fighter2 = this.player2.fighter;
    if (this.mode === 'classic') {
      this.classicWinner(fighter1, fighter2)
    }  else {
      this.difficultWinner(fighter1, fighter2);
    }
  }

  classicWinner(fighter1, fighter2) {
      // if else
    if (fighter1 === fighter2) {
      // This will probably invoke a function that changes innertext
      return "It's a draw!"
    } else if ((fighter1 === 'rock' && fighter2 === 'scissors') || (fighter1 === 'paper' && fighter2 === 'rock') || (fighter1 === 'scissors' && fighter2 === "paper")) {
      player1.updateWins();
    } else {
      player2.updateWins();
    }
  }


  difficultWinner(fighter1, fighter2) {
    // Can you do this???
    // Might have to change this all back to stating: e.g. fighter2 === 'scissors' || fighter2 === 'rock'
    // Trying to shorten this now but may not work...other version in note app!
    if (fighter1 === fighter2) {
      return `It's a draw!` // invoke function that changes innertext instead
    } else if ((fighter1 === 'rock' && fighter2 === ('scissors' || 'rock')) || (fighter1 === 'paper' && fighter2 === ('rock' || 'llama')) || (fighter1 === 'scissors' && fighter2 === ('paper' || 'plant')) || (fighter1 === 'plant' && fighter2 === ('paper' || llama')) || (fighter1 === 'llama' && fighter2 === ('scissors' || 'rock')) {
      player1.updateWins();
    } else {
      player2.updateWins();
    }


  resetBoard() {
    // This function changes view back to either classic or difficult
      // So...I need logic to evaluate what this.mode is
    
  }
}
