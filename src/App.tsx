import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";

function App(): JSX.Element {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
