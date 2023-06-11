import { useState } from "react";

export const useCounter = (initial = 0) => {
    const [counter, setCounter] = useState(initial);
    const [counterIsVisible, setCounterIsVisible] = useState(false);
    const increaseCounter = () => {
        setCounter(counter+1);
    };

    const decreaseCounter = () => {
        setCounter(counter-1);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    const showCounter = () => {
        setCounterIsVisible(!counterIsVisible);
    }

    return [counter, counterIsVisible, increaseCounter, decreaseCounter, resetCounter, showCounter];

};