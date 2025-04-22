// src/components/QuestionForm/QuestionForm.jsx
import React, { useState } from "react";
import { analyzeVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";

function QuestionForm({ setAnswer, setLoading, loading }) {
  const [question, setQuestion] = useState("");

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const res = await analyzeVideo(question);
      showToast("✅ Phân tích thành công", "success");
      setAnswer(res.data.response);
      localStorage.setItem("latest-answer", res.data.response);
    } catch (err) {
      showToast("❌ Lỗi khi phân tích video", "error");
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
        className="button-style bg-green-600 hover:bg-green-700"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "⏳ Đang phân tích..." : "🔍 Phân Tích Video"}
      </button>
    </div>
  );
}

export default QuestionForm;
