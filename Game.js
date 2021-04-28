class Game {
  constructor() {
    this.player1 = new Player('human', 'assets/human.png', 0);
    this.player2 = new Player('computer', 'assets/computer.png', 1);
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
    } else if ((fighter1 === 'rock' && (fighter2 === 'scissors' || fighter2 === 'paper'))
    || (fighter1 === 'paper' && (fighter2 === 'rock' || fighter2 === 'llama')) || (
      fighter1 === 'scissors' && (fighter2 === 'paper' || fighter2 === 'plant'))
      || (fighter1 === 'plant' && (fighter2 === 'paper' || fighter2 === 'llama'))
      || (fighter1 === 'llama' && (fighter2 === 'scissors' || fighter2 === 'rock'))) {
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


  resetGameScore() {
    this.player1.resetWinsInLocalStorage();
    this.player2.resetWinsInLocalStorage();
  }

}
