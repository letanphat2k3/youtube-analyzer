import React, { useState } from "react";
import YoutubeInput from "./components/YoutubeInput/YoutubeInput";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Toast from "./components/Toast/Toast";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  const [answer, setAnswer] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">YouTube Video Analyzer</h1>
          <ThemeToggle />
        </div>
        <YoutubeInput setLoading={setVideoLoading} loading={videoLoading} />
        <QuestionForm setAnswer={setAnswer} setLoading={setAnalyzeLoading} loading={analyzeLoading} />
        <ResultBox answer={answer} loading={analyzeLoading} />
        <Toast />
      </div>
    </div>
  );
}

export default App;
