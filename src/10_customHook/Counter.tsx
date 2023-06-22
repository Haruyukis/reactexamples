import { useState } from "react";

type tUseCount = [number, () => void, () => void, () => void] // ⚠️ This is the way to define the type of an array with multiple types.

export const useCount = (initial = 0) : tUseCount  => {
    const [counter, setCounter] = useState<number>(initial);

    const increase = () => {
        setCounter(counter+1);
    };

    const decrease = () => {
        setCounter(counter-1);
    };

    const reset = () => {
        setCounter(initial);
    };

    // ⚠️ Remark: Return each functions and values usefull to simplify the one calling the hook.
    return [counter, increase, decrease, reset]
}

