class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
  }
  saveWinsToStorage() {
    // localStorage
  }
  retrieveWinsFromStorage() {

  }
  takeTurn(token) {
    this.token = token;
  }
  updateWins() {
    this.wins+= 1;
  }
};
