import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterButtons = () => {
    const { dispatch } = useContext(CounterContext);

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <div className="buttonsGroup">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CounterButtons;
