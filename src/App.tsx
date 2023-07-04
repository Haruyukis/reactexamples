import "./App.css";
import { DarkMode } from "./components/DarkMode";
import { SideBar } from "./components/SideBar";
import { useState } from "react";

function App(): JSX.Element {
  const [isDark, setIsDark] = useState("dark");

  return (
    <div className={isDark}>
      <div className={`v-screen flex h-screen bg-gray-200 dark:bg-gray-700`}>
        <SideBar />
        <DarkMode set={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
