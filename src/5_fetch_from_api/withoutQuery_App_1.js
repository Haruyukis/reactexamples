import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios"

function App() {

  const [catFact, setCatFact] = useState("");

  const generateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  };
  
  useEffect(() => {
    generateCatFact();
  }, [])

  return(
    <div className="App">
      <button onClick={generateCatFact}>Generate Cat Fact</button>
      <p> {catFact} </p>
    </div>
  );
};


export default App;