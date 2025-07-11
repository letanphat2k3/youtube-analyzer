import React, { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import RegisterForm from "./RegisterForm";

function AuthTabs({ onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setActiveTab("login")}
          className={`px-4 py-2 rounded-full font-bold ${
            activeTab === "login"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`px-4 py-2 rounded-full font-bold ${
            activeTab === "register"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          Đăng ký
        </button>
      </div>
      {activeTab === "login" ? (
        <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
      ) : (
        <RegisterForm onSuccess={onLoginSuccess} />
      )}
    </div>
  );
}

export default AuthTabs;
