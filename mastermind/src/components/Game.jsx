import React from 'react';

const DIFF_NONE="none";
const DIFF_EASY="easy";
const DIFF_MED="med";
const DIFF_HARD="hard";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: DIFF_NONE,
      guess: 0,
      actualVal: Math.floor(Math.random() * 100),
      guessText: "Make your guess"
    };
  }

  handleInc = (event) => {
    let guess = this.state.guess;
    this.setState({
      guess: guess + 1
    });
  }

  handleDec = (event) => {
    let guess = this.state.guess;
    this.setState({
      guess: guess - 1
    });
  }

  // Allows the users to update the text field and update the guess accordingly.
  handleTextInput = (event) => {
    // console.log("HTI fired " + event.target.value);
    if (event.keyCode === 13) {
      this.makeGuess();
    } else {
      let guess = parseInt(event.target.value);
      // Set the guess to zero if it detects a NaN.
      // Like if a user backspaces or types a letter.
      if (isNaN(guess)) {
        guess = 0;
      }

      this.setState({
        guess: guess
      });
    }
  }

  makeGuess = () => {
    if (this.state.guess === this.state.actualVal) {
      this.setState({
        guessText: "On the money"
      });
    } else {
      if (this.state.guess > this.state.actualVal) {
        this.setState({
          guessText: "Too high"
        });
      } else {
        this.setState({
          guessText: "Too low"
        })
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          title
        </div>
        <div className="row">
          <button>easy</button>
          <button>medium</button>
          <button>hard</button>
        </div>
        <div className="row">
          <button onClick={this.handleDec}>-</button>
          <input type="text" 
                 value={this.state.guess}
                 onChange={this.handleTextInput}
                 onKeyDown={this.handleTextInput}
                 />
          <button onClick={this.handleInc}>+</button>
        </div>
        <div className="row">
          <button onClick={this.makeGuess}>GUESS</button>
        </div>
        <div className="row">
          {this.state.guessText}
        </div>
      </div>
    );
  }
}

export default Game;