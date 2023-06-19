import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
function App(): JSX.Element {

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            {/* <Route> always contains the path of one specific page and the component corresponding to that page. */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<h1> Error 404 : Page not found...</h1>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
