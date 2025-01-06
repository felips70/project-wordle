import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import SadBanner from '../SadBanner/SadBanner';
import HappyBanner from '../HappyBanner/HappyBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('playing'); // playing | won | lost
  const [lettersStatus, setLettersStatus] = useState({});

  const handleSubmitGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    const checkedGuess = checkGuess(guess, answer);
    const coloredKeys = checkedGuess.reduce((acc, curr) => ({ ...acc, [curr.letter]: curr.status }), {});
    setLettersStatus({ ...lettersStatus, ...coloredKeys })

    if (answer === guess) {
      return setGameState('won');
    }
    if (newGuesses.length === 6 && gameState === 'playing') {
      return setGameState('lost');
    }
  }

  const handleResetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameState('playing');
    setLettersStatus({});
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameState={gameState}
      />
      <Keyboard lettersStatus={lettersStatus} />
      {gameState === 'lost' && <SadBanner answer={answer} handleResetGame={handleResetGame} />}
      {gameState === 'won' && <HappyBanner numOfGuesses={guesses.length} handleResetGame={handleResetGame} />}
    </>
  );
}

export default Game;
