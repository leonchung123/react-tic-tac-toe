import React from 'react';
import Board from './Board';

const Game = () => {

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <Board onClick={handleClick} />
        </>
    );
}

export default Game;