import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import YoutubeInput from "./components/YoutubeInput/YoutubeInput";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Toast from "./components/Toast/Toast";


function App() {
  const [answer, setAnswer] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar setLoading={setVideoLoading} loading={videoLoading} />
      <div className="flex-1 p-6">
        <HeaderBar />
        <YoutubeInput setLoading={setVideoLoading} loading={videoLoading} />
        <QuestionForm setAnswer={setAnswer} setLoading={setAnalyzeLoading} loading={analyzeLoading} />
        <ResultBox answer={answer} loading={analyzeLoading} />
        <Toast />
      </div>
    </div>
  );
}

export default App;
