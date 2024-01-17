import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterDisplay = () => {
    const { state } = useContext(CounterContext);
    return (
        <div className="counterDisplay">
            <h1>Counter: {state.count}</h1>
        </div>
    );
};

export default CounterDisplay;
