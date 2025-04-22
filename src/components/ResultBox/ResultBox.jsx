// src/components/ResultBox/ResultBox.jsx
import React from "react";

function ResultBox({ answer, loading }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4 min-h-[100px]">
      <h2 className="font-semibold text-lg mb-2">📝 Kết quả phân tích:</h2>
      {loading ? (
        <p className="text-blue-500 animate-pulse">⏳ Đang xử lý video...</p>
      ) : (
        <p className="whitespace-pre-wrap">{answer || "Chưa có kết quả"}</p>
      )}
    </div>
  );
}

export default ResultBox;
