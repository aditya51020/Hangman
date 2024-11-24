import React from 'react';

const Input = ({ getInput, wrongGuessedLetters }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => getInput(letter)}
          className={`w-[calc(100%/10-5px)] border-gray-400 rounded-sm p-2 m-1 text-center ${
            wrongGuessedLetters?.has(letter.toLowerCase())
              ? 'bg-[#8286c9] text-white cursor-not-allowed'
              : 'bg-[#5E63BA] text-white hover:bg-[#8286c9] focus:outline-none'
          }`}
          disabled={wrongGuessedLetters?.has(letter.toLowerCase())} // Disable button if guessed wrong
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Input;
