import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1"
    >
      {darkMode ? (
        <>
          <SunIcon className="h-4 w-4" /> Light
        </>
      ) : (
        <>
          <MoonIcon className="h-4 w-4" /> Dark
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
