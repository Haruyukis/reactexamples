//<button onClick={}></button>

import { useEffect } from "react";

interface IDarkModeProps {
  set: React.Dispatch<React.SetStateAction<string>>;
  isDark: string;
}

export const DarkMode = (props: IDarkModeProps) => {
  const handleDarkMode = () => {
    props.isDark === "" ? props.set("dark") : props.set("");
    console.log(props.isDark);
  };

  return (
    <div className="mx-auto my-auto flex h-5 w-5">
      <button onClick={handleDarkMode}>
        {props.isDark === "dark" ? <>☀️</> : <>🌚</>}
      </button>
    </div>
  );
};
