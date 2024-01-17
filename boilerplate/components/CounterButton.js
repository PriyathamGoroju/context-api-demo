import React, { useContext } from 'react';
// import { ? } from '../context/CounterContext';

const CounterButtons = () => {
  // use context api

  const handleIncrement = () => {
    // increase the count
  };

  const handleDecrement = () => {
    // decrease the count
  };

  return (
    <div className='buttonsGroup'>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
