import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function ResultBox({ answer, loading }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!loading && answer) {
      setDisplayText("");
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + answer[i]);
        i++;
        if (i >= answer.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [answer, loading]);

  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 p-6 rounded-3xl shadow-2xl mb-4 min-h-[120px] border-2 border-transparent bg-clip-padding group overflow-hidden" style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", borderImage: "linear-gradient(90deg, #34d399 0%, #60a5fa 50%, #a78bfa 100%) 1" }}>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 animate-pulse z-0" />
      <h2 className="font-extrabold text-2xl mb-3 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-lg z-10 relative">
        <PencilSquareIcon className="h-7 w-7" />
        Kết quả phân tích:
      </h2>
      {loading ? (
        <p className="text-blue-500 animate-pulse flex items-center gap-2 font-semibold text-lg z-10 relative">
          <svg className="animate-spin h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25"/><path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75"/></svg>
          Đang xử lý video...
        </p>
      ) : (
        <p className="whitespace-pre-wrap min-h-[2rem] font-medium text-gray-700 dark:text-gray-200 z-10 relative">{displayText || "Chưa có kết quả"}</p>
      )}
    </div>
  );
}

export default ResultBox;
