import './App.css';
import {useState} from "react";
import Axios from "axios"

function App() {

  const [name, setName] = useState("");

  const [data, setData] = useState({});

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
    })
  };

  return(
    <div className="App">
      <input placeholder="Ex. Pedro..." onChange={(event) => {
        setName(event.target.value);
      }}/>

      <button onClick={fetchData}>Predict Age</button>
      {/* {data?.name} : display the name only if name exist else display nothing. Must do if data.name is not fetch initially.*/}
      <h1>Name :{data?.name}</h1>
      <h1>Predicted Age :{data?.age}</h1>
      <h1>Count :{data?.count}</h1>
    </div>
  );
};


export default App;