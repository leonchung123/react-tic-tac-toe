import React from 'react';

const Square = ({ value, onClick }) => (
    <button className='square-style' onClick={onClick}>
        {value}
    </button>
);

export default Square;