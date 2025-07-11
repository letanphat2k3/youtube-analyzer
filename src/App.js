import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home/Home";
import YoutubeInput from "./components/YoutubeInput/YoutubeInput";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Toast, { showToast } from "./components/Toast/Toast";
import AuthTabs from "./components/Authentication/AuthTabs";
import Header from "./components/Header/Header";
import Modal from "./components/Authentication/Modal";

function Dashboard({ user, setUser }) {
  const [answer, setAnswer] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  return (
    <>
      <Header
        user={user}
        onLogout={() => {
          localStorage.removeItem("user");
          setUser(null);
          showToast("Đã đăng xuất", "success");
        }}
        onLoginClick={() => {
          setAuthTab("login");
          setShowModal(true);
        }}
        onRegisterClick={() => {
          setAuthTab("register");
          setShowModal(true);
        }}
      />
      <div className="max-w-3xl mx-auto p-4">
        {!user ? (
          <p className="text-center text-gray-600 dark:text-gray-400 font-semibold">
            Vui lòng đăng nhập để sử dụng công cụ phân tích video.
          </p>
        ) : (
          <>
            <YoutubeInput setLoading={setVideoLoading} loading={videoLoading} />
            <QuestionForm setAnswer={setAnswer} setLoading={setAnalyzeLoading} loading={analyzeLoading} />
            <ResultBox answer={answer} loading={analyzeLoading} />
          </>
        )}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <AuthTabs
          initialTab={authTab}
          onLoginSuccess={(userData) => {
            setUser(userData);
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
}

function HomeWrapper({ user, setUser }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  const handleStart = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      setAuthTab("login");
      setShowModal(true);
    }
  };

  return (
    <>
      <Header
        user={user}
        onLogout={() => {
          localStorage.removeItem("user");
          setUser(null);
          showToast("Đã đăng xuất", "success");
        }}
        onLoginClick={() => {
          setAuthTab("login");
          setShowModal(true);
        }}
        onRegisterClick={() => {
          setAuthTab("register");
          setShowModal(true);
        }}
      />
      <Home onStart={handleStart} />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <AuthTabs
          initialTab={authTab}
          onLoginSuccess={(userData) => {
            setUser(userData);
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-0 m-0">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomeWrapper user={user} setUser={setUser} />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
          </Routes>
        </AnimatePresence>
        <Toast />
      </div>
    </Router>
  );
}

export default App;
