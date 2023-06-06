import './App.css';
import {useState} from "react";
import Axios from "axios"

function App() {

  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (excuseType) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}/`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  return(
    <div className="App">
      <h1>Generate An Excuse</h1>

      <button onClick={() => fetchExcuse("party")}>
        Party
      </button>

      <button onClick={() => fetchExcuse("family")}>
        Family
      </button>

      <button onClick={() => fetchExcuse("office")}>
        Office
      </button>
      <h1>Excuse :{excuse}</h1>
    </div>
  );
};


export default App;