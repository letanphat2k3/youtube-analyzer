import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import GoogleLoginButton from "./GoogleLoginButton";
import "./RegisterFormStyle";

function AuthTabs({ onLoginSuccess, initialTab = "login" }) {
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    if (initialTab === "register") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [initialTab]);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setActiveTab("login")}
          className={`tab-button ${activeTab === "login" ? "tab-button-active" : ""}`}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`tab-button ${activeTab === "register" ? "tab-button-active" : ""}`}
        >
          Đăng ký
        </button>
      </div>

      <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-lg animate-fade-in space-y-6">
        {activeTab === "login" ? (
          <>
            <LoginForm onSuccess={onLoginSuccess} />
            <div className="text-center text-sm text-gray-400 uppercase">hoặc</div>
            <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
          </>
        ) : (
          <RegisterForm onSuccess={onLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default AuthTabs;
