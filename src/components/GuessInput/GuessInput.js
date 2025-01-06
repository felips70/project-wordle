import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess, gameState }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        required
        disabled={gameState !== 'playing'}
        type='text'
        value={tentativeGuess}
        onChange={e => setTentativeGuess(e.target.value.toUpperCase())}
        pattern='[A-Z]{5}'
        title='5 letter word'
      />
    </form>
  );
}

export default GuessInput;
