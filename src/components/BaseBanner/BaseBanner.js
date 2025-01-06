import React from 'react';

function BaseBanner({ children, mood, handleResetGame }) {
  return (
    <div className={`${mood} banner`}>
      <button className='reset-btn' onClick={handleResetGame}>Reset</button>
      {children}
    </div>
  );
}

export default BaseBanner;
