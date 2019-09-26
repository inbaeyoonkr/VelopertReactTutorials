import React from 'react';

const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h3>{number}</h3>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
