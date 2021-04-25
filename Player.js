class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.fighter = '';
    this.wins = 0;
  }


  saveWinsToStorage() {
    // localStorage
    // stringify here
  }


  retrieveWinsFromStorage() {
    // parse here
  }


  changePlayerDetails(selectedFighter) {
    this.fighter = selectedFighter;
    // this.takeTurn();
    currentGame.changePlayer2Details()
  }


  takeTurn() {
    var selectedFighter2;
    if (currentGame.mode === 'difficult') {
      var fighters = ['rock', 'paper', 'scissors', 'plant', 'llama'];
      selectedFighter2 = fighters[this.getRandomIndex(fighters)];
    } else {
      var fighters = ['rock', 'paper', 'scissors']
      selectedFighter2 = fighters[this.getRandomIndex(fighters)];
    }
    this.fighter = selectedFighter2;
    showfighterChoices(currentGame.player1.fighter, this.fighter);
    currentGame.evaluateWinner(currentGame.player1.fighter, this.fighter);
  }


  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


  updateWins() {
    this.wins++;
    console.log('2', currentGame.player1.wins, currentGame.player2.wins);
    // currentGame.resetBoard();
  }
};
