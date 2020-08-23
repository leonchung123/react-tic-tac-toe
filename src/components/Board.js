import React from 'react';
import Square from './Square';
import '../styles/styles.css';

const Board = ({ squares, onClick }) => (
  <div className='board-style'>
    <Square value='1' onClick={ () => onClick('test')} />
    <Square value='2' onClick={ () => onClick('test')} />
    <Square value='3' onClick={ () => onClick('test')} />
    <Square value='4' onClick={ () => onClick('test')} />
    <Square value='5' onClick={ () => onClick('test')} />
    <Square value='6' onClick={ () => onClick('test')} />
    <Square value='7' onClick={ () => onClick('test')} />
    <Square value='8' onClick={ () => onClick('test')} />
    <Square value='9' onClick={ () => onClick('test')} />
  </div>
);

export default Board;