import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer }) {

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {
        range(5).map(i => (
          <span
            key={i}
            className={`cell ${checkedGuess ? checkedGuess[i].status : ''}`}
          >
            {guess ? guess[i] : ''}
          </span>
        ))
      }
    </p>
  );
}

export default Guess;
