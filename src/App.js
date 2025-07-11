import React, { useState, useEffect } from "react";
import YoutubeInput from "./components/YoutubeInput/YoutubeInput";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Toast, { showToast } from "./components/Toast/Toast";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import GoogleLoginButton from "./components/Login/GoogleLoginButton";

import { StagewiseToolbar } from "@stagewise/toolbar-react";

function App() {
  const [user, setUser] = useState(null);
  const [answer, setAnswer] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);

  // Lấy user từ localStorage khi load trang
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Lưu user vào localStorage khi đăng nhập thành công
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      

      {/* Nội dung chính */}
      <div className="flex-1 p-4 max-w-4xl mx-auto">
        {process.env.NODE_ENV === "development" && <StagewiseToolbar />}

        {/* Tiêu đề và chuyển theme */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">YouTube Video Analyzer</h1>
          <ThemeToggle />
        </div>

        {/* Giao diện khi chưa đăng nhập */}
        {!user ? (
          <GoogleLoginButton onLoginSuccess={setUser} />
        ) : (
          <>
            {/* Thông tin người dùng + nút đăng xuất */}
            <div className="flex justify-between items-center text-sm mb-4 text-gray-500">
              <span>
                Đăng nhập: <span className="font-semibold">{user.name}</span>
              </span>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser(null);
                  showToast("Đã đăng xuất", "success");
                }}
                className="ml-4 text-red-500 underline hover:text-red-700 transition"
              >
                Đăng xuất
              </button>
            </div>

            {/* Các chức năng chính */}
            <YoutubeInput setLoading={setVideoLoading} loading={videoLoading} />
            <QuestionForm setAnswer={setAnswer} setLoading={setAnalyzeLoading} loading={analyzeLoading} />
            <ResultBox answer={answer} loading={analyzeLoading} />
          </>
        )}

        {/* Toast thông báo */}
        <Toast />
      </div>
    </div>
  );
}

export default App;
