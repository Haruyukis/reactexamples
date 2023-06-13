import './App.css';
import { useState } from "react";

function App() {
  // Example of usage of a useState is tsx -> Counter with option [ Reset / Increase / Decrease ].
  const [count, setCount] = useState<number>(0);

  const resetCount = () => {
    setCount(0);
  };

  const increaseCount = () => {
    setCount(count+1);
  };

  const decreaseCount = () => {
    setCount(count-1);
  };

  return (
    <div className="App">
      <button onClick={resetCount}>Reset</button>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
