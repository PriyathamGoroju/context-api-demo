import React, { createContext, useReducer } from "react";

const initialState = { count: 0 };
const CounterContext = createContext();

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
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
