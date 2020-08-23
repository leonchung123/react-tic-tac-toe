/*
  Tic-Tac-Toe written using React.js
  Leon Chung 2020
*/

import React from 'react';
import Square from './Square';
import '../styles/styles.css';

const Board = ({ squares, onClick }) => (
  <div className='board-style'>

    {
      squares.map((square, i) =>
        <Square key={i} value={square} onClick={() => onClick(i)} />
      )
    }

  </div>
);

export default Board;