import './App.css';
import { useCounter } from "./useCounter.js";

function App() {
  // Show / Display / Increase / Sub / Reset

  const [counter, counterIsVisible, increase, decrease, reset, showCounter] = useCounter(60);
  return (
  <div className="App">
    <button onClick={showCounter}>{counterIsVisible ? "Hide" : "Show"}</button>
    <h1>{counterIsVisible && counter}</h1>
    <button onClick={reset}>Reset</button>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
  ); 
};


export default App; 