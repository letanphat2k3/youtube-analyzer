import React from "react";

function HistoryChat({ history }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md max-h-[300px] overflow-y-auto">
      <h3 className="font-bold mb-2">🕒 Lịch sử câu hỏi</h3>
      {history.length === 0 ? (
        <p className="text-sm text-gray-500">Chưa có lịch sử</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, idx) => (
            <li key={idx} className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryChat;
