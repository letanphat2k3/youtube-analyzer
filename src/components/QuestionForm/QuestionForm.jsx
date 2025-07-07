import React, { useState } from "react";
import { analyzeVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import { FaSearch, FaBook, FaCut, FaRobot, FaVideo } from "react-icons/fa";

const modeOptions = [
  {
    value: "chi_tiet",
    label: (
      <span className="inline-flex items-center gap-2">
        <FaBook className="inline" /> Tóm tắt chi tiết
      </span>
    ),
    text: "Tóm tắt chi tiết",
    icon: <FaBook className="inline" />,
  },
  {
    value: "ngan",
    label: (
      <span className="inline-flex items-center gap-2">
        <FaCut className="inline" /> Tóm tắt ngắn
      </span>
    ),
    text: "Tóm tắt ngắn",
    icon: <FaCut className="inline" />,
  },
  {
    value: "tuy_chinh",
    label: (
      <span className="inline-flex items-center gap-2">
        <FaRobot className="inline" /> Trả lời tự do
      </span>
    ),
    text: "Trả lời tự do",
    icon: <FaRobot className="inline" />,
  },
];

function QuestionForm({ setAnswer, setLoading, loading }) {
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState("chi_tiet");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedOption = modeOptions.find((opt) => opt.value === mode);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const res = await analyzeVideo(question, mode);
      showToast("Phân tích thành công", "success");
      setAnswer(res.data.response);
      localStorage.setItem("latest-answer", res.data.response);
    } catch (err) {
      showToast("Lỗi khi phân tích video", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative mb-8 p-0 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto animate-fade-in backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 overflow-visible group flex flex-col items-center"
      style={{
        boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.25)",
        border: "2px solid rgba(255,255,255,0.22)",
      }}
    >
      {/* Hiệu ứng gradient động */}
      <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-br from-green-400/40 via-blue-400/30 to-purple-400/20 rounded-full blur-3xl opacity-70 animate-pulse z-0" />
      {/* Title & Description */}
      <div className="flex flex-col justify-center items-center w-full px-8 py-10 bg-gradient-to-br from-white/60 dark:from-gray-900/60 to-transparent z-10 rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-700 backdrop-blur-xl relative overflow-hidden animate-fade-in mb-4">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-400/40 via-blue-400/30 to-purple-400/20 rounded-full blur-2xl opacity-60 animate-pulse z-0" />
        <span className="bg-gradient-to-tr from-green-400 to-blue-500 p-4 rounded-full shadow-lg animate-bounce mb-4 z-10">
          <FaVideo className="w-16 h-16 text-white drop-shadow" />
        </span>
        <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-lg mb-2 text-center animate-gradient-x transition-all duration-500">
          YouTube Video Analyzer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-2 text-center">
          Phân tích, tóm tắt hoặc hỏi đáp thông minh cho video YouTube của bạn.
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70" />
      </div>
      {/* Form */}
      <form
        className="flex flex-col justify-center gap-6 px-8 py-10 z-10 rounded-3xl bg-white/80 dark:bg-gray-900/80 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleAnalyze();
        }}
      >
        <div className="flex flex-col gap-2 mb-2">
          <label
            htmlFor="question"
            className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-2"
          >
            <FaSearch className="text-blue-500" /> Nhập câu hỏi cho video
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="💬 Ví dụ: Tóm tắt nội dung chính của video này..."
            className="rounded-xl border-2 border-transparent focus:border-blue-400 dark:focus:border-green-400 bg-white/90 dark:bg-gray-800/90 px-5 py-3 text-lg font-medium placeholder-gray-400 dark:placeholder-gray-500 shadow-md focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-400 transition-all duration-300 outline-none"
            disabled={loading}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-4 relative z-10">
          {/* Custom Dropdown */}
          <div className="relative flex-1 flex min-w-[180px]">
            <button
              type="button"
              className="rounded-xl border-2 border-transparent focus:border-blue-400 dark:focus:border-green-400 bg-white/90 dark:bg-gray-800/90 flex items-center gap-2 px-6 py-3 font-semibold text-lg shadow-md hover:ring-2 hover:ring-blue-300 dark:hover:ring-green-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-400 w-full transition-all duration-200 outline-none"
              onClick={() => setDropdownOpen((v) => !v)}
              disabled={loading}
              style={{ minHeight: "56px" }}
            >
              {selectedOption.icon} {selectedOption.text}
              <svg
                className={`ml-2 w-5 h-5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-30 mt-2 w-full bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl backdrop-blur-lg animate-fade-in overflow-hidden">
                {modeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    className={`w-full text-left px-6 py-3 flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800/80 transition-all duration-150 rounded-xl text-lg font-medium ${
                      mode === opt.value
                        ? "font-bold text-blue-600 dark:text-green-400 bg-blue-100/40 dark:bg-green-900/30"
                        : ""
                    }`}
                    onClick={() => {
                      setMode(opt.value);
                      setDropdownOpen(false);
                    }}
                    disabled={loading}
                  >
                    {opt.icon} {opt.text}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* End custom dropdown */}
          <button
            className="flex-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-pink-600 hover:via-red-500 hover:to-yellow-500 text-white flex items-center justify-center gap-2 rounded-xl shadow-xl px-7 py-3 font-bold text-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-400/40 min-h-[56px] relative overflow-hidden group"
            onClick={handleAnalyze}
            disabled={loading}
            style={{ minHeight: "56px" }}
            type="submit"
          >
            {loading ? (
              <>
                <span className="absolute left-4 flex items-center">
                  <svg
                    className="animate-spin h-6 w-6 text-white opacity-80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8"
                      strokeWidth="4"
                      className="opacity-75"
                    />
                  </svg>
                </span>
                <span className="ml-8">Đang phân tích...</span>
              </>
            ) : (
              <>
                <FaSearch className="h-6 w-6" />
                Phân Tích
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionForm;
