import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  // Mini-Project : Doing a todolist.

  interface dataType{
    age: number;
    count: number;
    name: string;
  };

  const [name,  setName] = useState<string>("");

  const [fetchData, setFetchData] = useState<dataType>();

  /* Fetching Data */

  const handleDataFetch = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setFetchData(res.data);
    });
  };

  const handleNameInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={handleNameInput} placeholder="Put a name..."/>
      <button onClick={handleDataFetch}>Fetching Data</button>
      <h1>Age : {fetchData?.age}</h1>
      <h1>Count :{fetchData?.count}</h1>
      <h1>Name: {fetchData?.name}</h1>

    </div>
  );
}

export default App;
