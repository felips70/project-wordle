import React from 'react';
import { KEY_ROWS } from '../../data'

function Keyboard({ lettersStatus }) {
  return (
    <div className='keyboard-container'>
      {KEY_ROWS.map((row, i) => (
        <div key={i} className='keyboard-row'>
          {row.map((letter, j) => {
            return <div className={`key ${lettersStatus[letter]}`} key={j}>{letter}</div>
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
