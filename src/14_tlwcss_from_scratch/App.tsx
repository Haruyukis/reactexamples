import "./App.css";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App(): JSX.Element {
  return (
    <div
      className={`bg-BgBodyImage bg-[length:800px] bg-[90%_-25%] bg-no-repeat`}
    >
      <Router>
        {/* Everything between the balise Router deals with react-router-dom. */}
        <Navbar />
        <Routes>
          {/* Inside of the balise Routes, the elements can only be Route. */}
          {/* <Route> always contains the path of one specific page and the component corresponding to that page. */}
          <Route path="/" element={<Home />}></Route>
          <Route
            path="*"
            element={<h1> Error 404 : Page not found...</h1>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
