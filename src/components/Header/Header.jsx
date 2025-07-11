import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header({ user, onLogout, onLoginClick, onRegisterClick }) {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-400 via-blue-400 to-purple-500 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 10.5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 4v-11l-4 4z" />
          </svg>
        </div>
        <span className="text-xl font-extrabold text-gray-800 dark:text-white tracking-tight">
          YouTube Video Analyzer
        </span>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {!user ? (
          <>
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:scale-105 transition"
            >
              Đăng nhập
            </button>
            <button
              onClick={onRegisterClick}
              className="px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-300 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-800/20 transition"
            >
              Đăng ký
            </button>
          </>
        ) : (
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition"
          >
            Đăng xuất
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
