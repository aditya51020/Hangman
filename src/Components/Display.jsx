// Display.jsx
import React, { Component } from 'react';

export default class Display extends Component {
  render() {
    const word = this.props.word;


    const letters = word.split(" ").map((letter, index) => {
      return (
        <h2 key={letter + index} className="flex items-center">
          {letter}
        </h2>
      );
    });

    return (
      <div className="display flex items-center justify-center space-x-2">
        {letters}
      </div>
    );
  }
}
