import './App.css';
import {useState, createContext} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {Navbar} from "./Navbar"

export const AppContext = createContext();

function App() {

  const [username, setUsername] = useState("Alex");

  return (
  <div className="App">
    <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND.</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  </div>
  ); 
};


export default App; 