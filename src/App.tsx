import './App.css';
import { useCount } from "./Counter";

function App(): JSX.Element {

  const [counter, increase, decrease, reset] = useCount(0); // ⚠️ Basic call of a Hook
  // Remark: The name of these states must be the same if the hook return an object. Can be change if it's an array.

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
