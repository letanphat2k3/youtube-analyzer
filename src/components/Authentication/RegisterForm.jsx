import React, { useState } from "react";
import { registerUser } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";
import "./RegisterFormStyle";

export default function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      showToast("Mật khẩu không khớp", "error");
      return;
    }

    const res = await registerUser(form);
    if (res.data.success) {
      showToast("Đăng ký thành công", "success");
      onSuccess?.(res.data.user);
    } else {
      showToast(res.data.message || "Đăng ký thất bại", "error");
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
      <div className="form-grid">
        <div>
          <label className="label-style">Họ</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="input-style"
            placeholder="Nguyễn"
            required
          />
        </div>
        <div>
          <label className="label-style">Tên</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="input-style"
            placeholder="Văn A"
            required
          />
        </div>
      </div>

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

      <div>
        <label className="label-style">Email</label>
        <div className="input-icon-wrapper">
          <FaEnvelope className="icon-style" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input-style pl-10"
            placeholder="email@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="label-style">Mật khẩu</label>
        <div className="input-icon-wrapper">
          <FaLock className="icon-style" />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="input-style pl-10"
            placeholder="********"
            required
          />
        </div>
      </div>

      <div>
        <label className="label-style">Nhập lại mật khẩu</label>
        <div className="input-icon-wrapper">
          <FaCheck className="icon-style" />
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="input-style pl-10"
            placeholder="********"
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Đăng ký
      </button>
    </motion.form>
  );
}
