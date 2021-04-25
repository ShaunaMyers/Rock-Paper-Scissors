class Game {
  constructor() {
    this.player1 = new Player('human', '👩🏻‍🌾');
    this.player2 = new Player('computer', '🖥');
    this.mode = '';
  }

  saveGameDetails(event) {
    this.mode = event.target.closest('div').id;
    console.log(this.mode);
    this.player1.changePlayer1Details(event.target.closest('button').id);
  }

  changePlayer2Details() {
    this.player2.takeTurn();
    // this.evaluateWinner();
  }

  evaluateWinner(fighter1, fighter2) {
    console.log('6', fighter1, fighter2);
    var winner;
    if (fighter1 === fighter2) {
      winner = 'draw';
      // this.resetBoard()???
    } else if ((fighter1 === 'rock' && (fighter2 === 'scissors' || fighter2 === 'paper')) || (fighter1 === 'paper' && (fighter2 === 'rock' || fighter2 === 'llama')) || (fighter1 === 'scissors' && (fighter2 === 'paper' || fighter2 === 'plant')) || (fighter1 === 'plant' && (fighter2 === 'paper' || fighter2 === 'llama')) || (fighter1 === 'llama' && (fighter2 === 'scissors' || fighter2 === 'rock'))) {
      this.player1.updateWins();
      winner = 'Human';
    } else {
      this.player2.updateWins();
      winner = 'Computer';
    }
    this.player2.declareWinner(winner);
    console.log('7', winner);
  }



// Game choice has been rerouted...alter this below...think more about this
// What calls evaluateWinner?
  // evaluateWinner(fighter1, fighter2) {
  //   if (this.mode === 'classic') {
  //     this.classicWinner(fighter1, fighter2)
  //   }  else {
  //     this.difficultWinner(fighter1, fighter2);
  //   }
  // }
//
  // classicWinner(fighter1, fighter2) {
  //   if (fighter1 === fighter2) {
  //     // This will probably invoke a function that changes innertext
  //     console.log(`It's a draw!`);
  //     return "It's a draw!"
  //     // this.resetBoard();
  //   } else if ((fighter1 === 'rock' && fighter2 === 'scissors') || (fighter1 === 'paper' && fighter2 === 'rock') || (fighter1 === 'scissors' && fighter2 === "paper")) {
  //     this.player1.updateWins();
  //   } else {
  //     this.player2.updateWins();
  //   }
  // }

  //
  // difficultWinner(fighter1, fighter2) {
  //   var winner;
  //   if (fighter1 === fighter2) {
  //     winner = 'draw';
  //     // this.resetBoard()???
  //   } else if ((fighter1 === 'rock' && (fighter2 === 'scissors' || fighter2 === 'paper')) || (fighter1 === 'paper' && (fighter2 === 'rock' || fighter2 === 'llama')) || (fighter1 === 'scissors' && (fighter2 === 'paper' || fighter2 === 'plant')) || (fighter1 === 'plant' && (fighter2 === 'paper' || fighter2 === 'llama')) || (fighter1 === 'llama' && (fighter2 === 'scissors' || fighter2 === 'rock'))) {
  //     this.player1.updateWins();
  //     winner = 'Human';
  //   } else {
  //     this.player2.updateWins();
  //     winner = 'Computer';
  //   }
  //   this.player1.declareWinner(winner);
  // }

  // Not working yet
  resetBoard() {
    setTimeOut(function() {
      endBattleModeView();
    }, 1000);
  }
  // Move this to main.js
    // if (this.mode === 'classic') {
    //   toggleHidden(classicFighters);
    // } else {
    //   toggleHidden(difficultFighters);
    // }
    //

}
