import React, { useState } from "react";
import { analyzeVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function QuestionForm({ setAnswer, setLoading, loading }) {
  const [question, setQuestion] = useState("");

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const res = await analyzeVideo(question);
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
    <div className="mb-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Nhập câu hỏi cho video"
        className="input-style"
        disabled={loading}
      />
      <button
        className="button-style bg-green-600 hover:bg-green-700 flex items-center gap-2"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25"/><path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75"/></svg>
            Đang phân tích...
          </>
        ) : (
          <>
            <MagnifyingGlassIcon className="h-5 w-5" />
            Phân Tích Video
          </>
        )}
      </button>
    </div>
  );
}

export default QuestionForm;