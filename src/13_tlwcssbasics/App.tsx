import "./App.css";
import { DarkMode } from "./components/DarkMode";
import { SideBar } from "./components/SideBar";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  // Initialize DarkMode with LocalStorage. -> LocalStorage.getItem is used only during the init.
  const localStorageDarkMode = localStorage.getItem("DarkMode");
  const initialDarkMode =
    localStorageDarkMode === null ? "dark" : localStorageDarkMode;
  const [isDark, setIsDark] = useState(initialDarkMode);

  // SetItem in localStorage each time 'isDark' is modified.
  useEffect(() => {
    localStorage.setItem("DarkMode", isDark);
  }, [isDark]);

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
