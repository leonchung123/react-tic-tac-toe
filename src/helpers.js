/*
  Tic-Tac-Toe written using React.js
  Leon Chung 2020
*/

const calculateWinner = (squares) => { // squares is the state of the board
    const lines = [
        [0, 1, 2],  // each element in the array is an index of the game board
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; // array destructuring
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const checkFullBoard = (squares) => {
    let ans = true;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            ans = false;
            break;
        }
    }
    return ans;
}

const checkEmptyBoard = (squares) => {
    let ans = true;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] !== null) {
            ans = false;
            break;
        }
    }
    return ans;
}
export {calculateWinner, checkFullBoard, checkEmptyBoard }