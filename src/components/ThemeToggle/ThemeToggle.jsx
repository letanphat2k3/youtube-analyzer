import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <button
      aria-label="Chuyển đổi chế độ sáng/tối"
      onClick={toggleTheme}
      className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-500 shadow-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50
        ${darkMode ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 border-yellow-300' : 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-200 dark:border-gray-700'}`}
    >
      {/* Icon mặt trời */}
      <span className="absolute left-2 z-10">
        <svg
          className={`w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" stroke="orange" fill="yellow" />
          <g stroke="orange">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
      {/* Icon mặt trăng */}
      <span className="absolute right-2 z-10">
        <svg
          className={`w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            fill="#fbbf24"
            stroke="#f59e42"
          />
        </svg>
      </span>
      {/* Thanh trượt */}
      <span
        className={`absolute left-1 top-1/2 w-6 h-6 rounded-full shadow-md transition-transform duration-500 -translate-y-1/2
          ${darkMode ? 'translate-x-6 bg-gray-900 border border-yellow-300' : 'bg-white border border-gray-300'}`}
        style={{ boxShadow: darkMode ? '0 0 12px 2px #fbbf24' : '0 2px 8px 0 #0002' }}
      ></span>
    </button>
  );
}

export default ThemeToggle;
