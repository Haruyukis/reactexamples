import './App.css';
import { Person, Country } from './Person';

function App() {
  return (
    <div className="App">
      <Person name="Pedro" email="pedro@gmail.com" age={21} isMarried={true} friends={["Jake", "Jessica", "Jerry"]} country={Country.France}/>
    </div>
  );
}

export default App;
