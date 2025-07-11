import React, { useState } from "react";
import { showToast } from "../Toast/Toast";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { loginUser } from "../../utils/api";
import "./RegisterFormStyle";

export default function LoginForm({ onSuccess }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      if (res.data.success) {
        showToast("Đăng nhập thành công", "success");

        if (remember) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        onSuccess?.(res.data.user);
      } else {
        showToast(res.data.message || "Đăng nhập thất bại", "error");
      }
    } catch (err) {
      showToast("Lỗi kết nối máy chủ", "error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="register-form"
    >
      {/* Tên đăng nhập */}
      <div>
        <label className="label-style">Tên đăng nhập</label>
        <div className="input-icon-wrapper">
          <FaUser className="icon-style" />
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="input-style pl-10"
            placeholder="vanan123"
            required
          />
        </div>
      </div>

      {/* Mật khẩu */}
      <div>
        <label className="label-style">Mật khẩu</label>
        <div className="input-icon-wrapper">
          <FaLock className="icon-style" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            className="input-style pl-10 pr-10"
            placeholder="********"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Ghi nhớ đăng nhập */}
      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          id="remember"
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
        />
        <label htmlFor="remember">Ghi nhớ đăng nhập</label>
      </div>

      {/* Nút đăng nhập */}
      <button type="submit" className="submit-button">
        Đăng nhập
      </button>
    </motion.form>
  );
}
