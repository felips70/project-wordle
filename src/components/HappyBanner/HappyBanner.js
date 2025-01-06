import React from 'react';
import BaseBanner from '../BaseBanner/BaseBanner';

function HappyBanner({ numOfGuesses, handleResetGame }) {
  return (
    <BaseBanner mood="happy" handleResetGame={handleResetGame}>
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numOfGuesses} {numOfGuesses === 1 ? ' guess' : ' guesses'}</strong>.
      </p>
    </BaseBanner>
  );
}

export default HappyBanner;
