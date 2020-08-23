import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, checkFullBoard, checkEmptyBoard } from '../helpers'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null)); // state of the game board
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = calculateWinner(board);

    let currentPlayerSymbol = isXTurn ? 'X' : 'O';

    const handleClick = i => {
        const boardCopy = [...board];

        // if a square is occupied or if the game is already won, no need to proceed further, thus return
        if (winner || boardCopy[i]) return;

        boardCopy[i] = currentPlayerSymbol;
        setBoard(boardCopy);
        setIsXTurn(!isXTurn);
    }

    const startNewGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    }

    const displayGameMessage = () => {
        let gameMessage;
        const isFullBoard = checkFullBoard(board);
        const isEmptyBoard = checkEmptyBoard(board);

        if (isEmptyBoard) {
            gameMessage = 'Welcome to tic-tac-toe! Click a cell to begin.'
        }
        else if (!winner && isFullBoard) {
            gameMessage = 'The game is a draw.';
        }
        else if (!winner && !isFullBoard) {
            gameMessage = `It is ${currentPlayerSymbol}'s turn.`;
        }
        else {
            gameMessage = `${winner} has won!`;
        }
        return gameMessage;
    }

    return (
        <>
            <h1 className='text-style'>Tic-Tac-Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className='text-style'>
                <p>{displayGameMessage()}</p>
                {!checkEmptyBoard(board) && <button onClick={() => startNewGame()}>Restart Game</button>}
            </div>
        </>
    );
}

export default Game;