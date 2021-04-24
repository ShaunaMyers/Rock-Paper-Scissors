class Player {
  constructor(name, token,fighter) {
    this.name = name;
    this.token = token;
    this.fighter = fighter;
    this.wins = 0;
  }
  saveWinsToStorage() {
    // localStorage
    // stringify here
  }
  retrieveWinsFromStorage() {
    // parse here
  }
  takeTurn() {
      // timeout??????
    var fighters = ['rock', 'paper', 'scissors', 'plant', 'llama'];
    var fighterChoice2 = fighters[this.getRandomIndex(fighters)];
    currentGame.saveGameDetails2(fighterChoice2);
    // My mentor told me this should update token
      // But I already have this information
    // Or would this kick off player2's turn
    // timeout??????
  }
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  updateWins() {
    this.wins++;
    currentGame.resetBoard();
  }
};
