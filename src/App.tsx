import { SideBar } from "./components/SideBar";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className={`v-screen flex h-screen bg-gray-500`}>
      <SideBar />
    </div>
  );
}

export default App;
