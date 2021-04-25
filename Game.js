class Game {
  constructor() {
    this.player1 = new Player('human', 'assets/human.png');
    this.player2 = new Player('computer', 'assets/computer.png');
    this.mode = '';
  }


  saveGameDetails(event) {
    if (event.target.closest('section').id === 'selectGame') {
      this.mode = event.target.closest('button').id;
    } else if (event.target.closest('section').id === 'classicFighters' ||
  event.target.closest('section').id === 'difficultFighters') {
    this.player1.changePlayer1Details(event.target.closest('button').id);
    }
  }


  changePlayer2Details() {
    this.player2.takeTurn();
  }


  evaluateWinner(fighter1, fighter2) {
    var winner;
    if (fighter1 === fighter2) {
      winner = 'Draw';

      // Is all this logic too difficult to read? I like this better because it's not a 30 line if/else statement
      // But when it's in a big chunk like this, is it less clear to read?
      // Would it be better to separate each condition on it's own line in separate if/else statements?

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
    changeGameBtn.setAttribute('disabled', '')
    setTimeout(function() {
      endBattleModeView(gameChoice);
    }, 2000);
  }


}

// Do I need to return to this (below?)...It seems repetitive to have the classicWinner AND difficultWinner funcions...it's not DRY and the logic allows for the evaluation of botht the classic AND the difficult variations of the game.

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
