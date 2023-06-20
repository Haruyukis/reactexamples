import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

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

  useEffect(() => {
    console.log("MOUNT happened!");
    handleDataFetch();
    return console.log("UNMOUT happened");
    // Remark: Every time one values in [] change, it will MOUNT then UNMOUNT the data.
  }, [])

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
