import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Sidebar({ setLoading, loading }) {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col shadow-xl">
      <h2 className="text-2xl font-bold mb-6">🎬 Video Bot</h2>
      <p className="text-sm mb-4 text-gray-300">Tải và phân tích video YouTube.</p>
      <ThemeToggle />
    </div>
  );
}

export default Sidebar;
