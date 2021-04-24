class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.mode = '';
  }

// player instances here

  evaluateWinner(gameChoice) {
    var token1 = this.player1.token;
    var token2 = this.player2.token;
    if (gameChoice === 'classic') {
      this.mode = gameChoice;
      this.classicWinner(token1, token2)
    }  else {
      this.mode = gameChoice;
      this.difficultWinner(token1, token2);
    }
  }

  classicWinner(token1, token2) {
    // logic for what beats what
    // Would a switch statement be the best thing?
    // invoke player1.updateWins or player2.updateWins

    // How do I get what is returned from this?
    // Can I save all these ternaries in a variable?
    // ***ORRR I think this is returning anything that is on the other side of the "?'***
      // If the condition evaluates to true
      // can I just make an if statment in updateWins that says if (classicWinner === player1)
      // else if (classicWinner === player2)
      // I can then have another code block for "Draw"
      // This will eventually invoke a function that would insert innerText that states it's a draw

      // if else
    if (token1 === 'rock' && token2 === 'scissors' || token1 === 'paper' && token2 === 'rock') { 
      return player1;
    }
    (token1 === 'paper' && token2 === 'rock') ? player1 :
    (token1 === 'scissors' && token2 === "paper") ? player1 :

    (token2 === 'rock' && token2 === 'scissors') ? player2 :
    (token2 === 'paper' && token2 === 'rock') ? player2 :
    (token2 === 'scissors' && token2 === "paper") ? player2 : 'Draw' // Maybe invoke difficultWinner here?
    // Could I simply call one function from evaluateWinner
    // THEN in the else statement on line 39, invoke difficultWinner
      // DifficultWinner would then include the other conditions
      // Follows the DRY principle...?


  }

  difficultWinner(token1, token2) {

    // This logic is probably too much for ternary...think we're supposed to keep them to one line

    // Can you do this???
    if (token1 === 'rock' && (token2 === 'scissors' || token2 === 'potted plant')


    // logic for what beats what in the difficult version
    // invoke player1.updateWins or player2.updateWins
  }

  resetBoard() {

  }
}
