import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

export default class Keyboard extends Component {
  render() {
    const getLetters = () => {
      const result = [];
      for (let i = 65; i < 65 + 26; i++) {
        result.push(String.fromCharCode(i));
      }
      return result;
    };

    const letters = getLetters();

    const button = letters.map((letter) => {
      return (
        <KeyboardButton
          key={letter}
          getInput={this.props.getInput}
          letter={letter}
          guessedLetters={this.props.guessedLetters}
          wrongGuessedLetters={this.props.wrongGuessedLetters}
        />
      );
    });

    return <div className="flex flex-wrap">{button}</div>;
  }
}
