class Game {
  constructor(mode, player1, player2) {
    this.mode = mode;
    this.player1 = player1;
    this.player2 = player2;
    console.log(this);
  }
  determineWinner() {
    var winner;
  if (this.player1.token > this.player2.token) {
    winner = player1;
  } else if (this.player2.token > this.player1.token) {
    winner = player2;
  } else {
    this.player.updateWins();

  }
  }
}
