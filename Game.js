class Game {
  constructor() {
    this.player1 = new Player('human', '👩🏻‍🌾');
    this.player2 = new Player('computer', '🖥');
    this.mode = '';
  }


  saveGameDetails(event) {
    this.mode = event.target.closest('div').id;
    this.player1.changePlayer1Details(event.target.closest('button').id);
  }


  changePlayer2Details() {
    this.player2.takeTurn();
  }


  evaluateWinner(fighter1, fighter2) {
    var winner;
    if (fighter1 === fighter2) {
      winner = 'Draw';
      // this.resetBoard()???
    } else if ((fighter1 === 'rock' && (fighter2 === 'scissors' || fighter2 === 'paper')) || (fighter1 === 'paper' && (fighter2 === 'rock' || fighter2 === 'llama')) || (fighter1 === 'scissors' && (fighter2 === 'paper' || fighter2 === 'plant')) || (fighter1 === 'plant' && (fighter2 === 'paper' || fighter2 === 'llama')) || (fighter1 === 'llama' && (fighter2 === 'scissors' || fighter2 === 'rock'))) {
      this.player1.updateWins();
      winner = 'Human';
    } else {
      this.player2.updateWins();
      winner = 'Computer';
    }
    this.player2.declareWinner(winner);
  }


  resetBoard() {
    var gameChoice = this.mode;
    setTimeout(function() {
      endBattleModeView(gameChoice);
    }, 3000);
  }


}



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
