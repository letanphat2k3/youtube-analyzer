import React, { useState } from "react";
import YoutubeInput from "./components/YoutubeInput/YoutubeInput";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Toast from "./components/Toast/Toast";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
// ✅ Thêm import StagewiseToolbar
import { StagewiseToolbar } from "@stagewise/toolbar-react";

function App() {
  const [answer, setAnswer] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-0 m-0">
      {/* ✅ Chỉ hiển thị toolbar trong môi trường phát triển */}
      {process.env.NODE_ENV === "development" && <StagewiseToolbar />}
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">YouTube Video Analyzer</h1>
          <ThemeToggle />
        </div>
        <YoutubeInput setLoading={setVideoLoading} loading={videoLoading} />
        <QuestionForm setAnswer={setAnswer} setLoading={setAnalyzeLoading} loading={analyzeLoading} />
        <ResultBox answer={answer} loading={analyzeLoading} />
        {/* Đã đưa dropdown về lại QuestionForm, không render ModeDropdown ở đây nữa */}
        <Toast />
      </div>
    </div>
  );
}

export default App;
