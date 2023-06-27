import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { CreatePost } from "./pages/create-post/create-post";
import { Navbar } from "./components/navbar";


function App(): JSX.Element {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create-post" element={<CreatePost />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
