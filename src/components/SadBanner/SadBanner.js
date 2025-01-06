import React from 'react';
import BaseBanner from '../BaseBanner/BaseBanner';

function SadBanner({ answer, handleResetGame }) {
  return (
    <BaseBanner mood="sad" handleResetGame={handleResetGame}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </BaseBanner>
  );
}

export default SadBanner;
