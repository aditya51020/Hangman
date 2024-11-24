import React, { Component } from 'react';

export default class KeyboardButton extends Component {
  render() {
    const { letter, getInput, guessedLetters, wrongGuessedLetters } = this.props;

    // Determine if the letter is wrong or already guessed
    const isWrong = wrongGuessedLetters?.has(letter.toLowerCase());
    const isGuessed = guessedLetters?.has(letter.toLowerCase());

    // Button styling based on state
    const buttonStyle = isWrong
      ? 'bg-red-600 text-white cursor-not-allowed'
      : isGuessed
      ? 'bg-gray-400 text-white cursor-not-allowed'
      : 'bg-blue-500 text-white hover:bg-blue-700';

    const handleClick = () => {
      if (!isGuessed) {
        getInput(letter);
      }
    };

    return (
      <button
        className={`w-[40px] h-[40px] m-1 rounded ${buttonStyle}`}
        onClick={handleClick}
        disabled={isGuessed}
        type="button"
      >
        {letter}
      </button>
    );
  }
}
