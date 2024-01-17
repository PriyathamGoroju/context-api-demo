import React, { createContext, useReducer } from 'react';

const initialState = {}; // initialize count here
const CounterContext = createContext();

const counterReducer = (state, action) => {
  // handle actions
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
