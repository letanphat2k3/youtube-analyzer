import React, { useState } from "react";
import { downloadVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import "./YoutubeInputStyle";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function YoutubeInput({ setLoading, loading }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");


  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await downloadVideo(url);
      showToast(res.data.message || "Tải video thành công", "success");
    } catch (err) {
      showToast("Lỗi khi tải video", "error");
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className="mb-4 flex flex-col gap-3 relative z-20">
      {/* Toggle Switch Button */}
      <div className="flex justify-end mb-2">
        
      </div>
      <div className="relative group">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError("");
          }}
          placeholder="Nhập link YouTube"
          aria-label="YouTube URL"
          className={`input-style pl-14 pr-12 py-3 text-lg rounded-3xl shadow-2xl bg-white dark:bg-gray-900 border border-transparent focus:border-gradient-to-r focus:from-red-500 focus:to-yellow-400 dark:focus:from-red-400 dark:focus:to-yellow-300 focus:ring-2 focus:ring-red-200 dark:focus:ring-yellow-300 backdrop-blur-md transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 font-semibold outline-none hover:scale-105 hover:shadow-2xl text-gray-900 dark:text-white ${error ? 'border-red-500 ring-2 ring-red-300' : ''}`}
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', borderImage: 'linear-gradient(90deg, #ef4444, #f59e42) 1' }}
          disabled={loading}
          onBlur={() => {
            if (url && !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=|youtu\.be\//.test(url)) {
              setError('Vui lòng nhập đúng định dạng link YouTube!');
            }
          }}
        />
        {/* Clear button */}
        {url && !loading && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 focus:outline-none"
            onClick={() => setUrl("")}
            tabIndex={-1}
            aria-label="Xóa nội dung"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      {/* Error message */}
      {error && <div className="text-red-500 text-sm font-semibold px-2">{error}</div>}
      <button
        className="button-style flex items-center gap-2 text-lg rounded-3xl py-3 px-6 shadow-xl bg-gradient-to-r from-red-500 to-yellow-400 dark:from-red-400 dark:to-yellow-300 hover:scale-105 hover:shadow-2xl hover:from-red-600 hover:to-yellow-500 dark:hover:from-red-500 dark:hover:to-yellow-400 focus:outline-none focus:ring-4 focus:ring-red-200 dark:focus:ring-yellow-300 transition-all duration-300 font-bold tracking-wide border-none backdrop-blur-md"
        style={{ boxShadow: '0 6px 24px 0 rgba(239, 68, 68, 0.15), 0 1.5px 8px 0 rgba(245, 158, 66, 0.10)' }}
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? (
          <>
            {/* Modern spinner */}
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            </span>
            Đang tải...
          </>
        ) : (
          <>
            <ArrowDownTrayIcon className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Gửi Video</span>
          </>
        )}
      </button>
    </div>
  );
}

export default YoutubeInput;