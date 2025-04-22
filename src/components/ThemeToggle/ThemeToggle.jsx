import React, { useEffect, useState } from "react";

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
      className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;