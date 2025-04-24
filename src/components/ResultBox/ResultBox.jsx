import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function ResultBox({ answer, loading }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!loading) {
      if (answer) {
        setDisplayText("");
        let i = 0;
        const interval = setInterval(() => {
          setDisplayText((prev) => prev + answer[i]);
          i++;
          if (i >= answer.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
      } else {
        setDisplayText("");
      }
    }
  }, [answer, loading]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4 min-h-[100px]">
      <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
        <PencilSquareIcon className="h-5 w-5" />
        Kết quả phân tích:
      </h2>
      {loading ? (
        <p className="text-blue-500 animate-pulse flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25"/><path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75"/></svg>
          Đang xử lý video...
        </p>
      ) : (
        <p className="whitespace-pre-wrap min-h-[2rem]">{displayText || "Chưa có kết quả"}</p>
      )}
    </div>
  );
}

export default ResultBox;