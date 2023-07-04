//<button onClick={}></button>

import { useEffect } from "react";

interface IDarkModeProps {
  set: React.Dispatch<React.SetStateAction<string>>;
  isDark: string;
}

export const DarkMode = (props: IDarkModeProps) => {
  // Handling the setState DarkMode.
  const handleDarkMode = () => {
    props.isDark === "" ? props.set("dark") : props.set("");
  };

  return (
    <div className="m-auto flex flex-col items-center space-y-3 rounded-xl bg-gray-100 dark:bg-gray-900">
      {/* Title & Icon */}
      <div className="flex justify-between">
        <h1 className="font-bold underline dark:text-white">
          DarkMode is here.
        </h1>
        <button
          className="transition-all duration-200 ease-linear hover:rotate-45"
          onClick={handleDarkMode}
        >
          {props.isDark === "dark" ? <>☀️</> : <>🌚</>}
        </button>
      </div>
      {/* Footer */}
      <p className="px-6 pb-6 dark:text-white">
        DarkMode is finally here. Please support for more options.
      </p>
    </div>
  );
};
