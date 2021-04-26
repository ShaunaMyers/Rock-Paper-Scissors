class Player {
  constructor(name, token, id) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.fighter = '';
    this.wins = localStorage.getItem(this.id) || 0;
  }


  saveWinsToStorage() {
    var savedWins = JSON.stringify(this.wins);
    localStorage.setItem(this.id, savedWins);
    this.retrieveWinsFromStorage();
  }


  retrieveWinsFromStorage() {
    var playerName = this.name;
    var playerWins = JSON.parse(this.wins);
    displayUpdatedWins(playerName, playerWins);
  }


  changePlayer1Details(selectedFighter) {
    this.fighter = selectedFighter;
    currentGame.changePlayer2Details();
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
    currentGame.evaluateWinner(currentGame.player1.fighter, this.fighter);
  }


  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


  updateWins() {
    this.wins++;
    this.saveWinsToStorage();
  }

  declareWinner(winner) {
    displayfighterChoices(winner, currentGame.player1.fighter, this.fighter);
}

};
