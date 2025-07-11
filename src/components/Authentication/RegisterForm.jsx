import React, { useState } from "react";
import { registerUser } from "../../utils/api";
import { showToast } from "../Toast/Toast";

function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    const response = await registerUser(form);
    if (response.data.success) {
      showToast("Đăng ký thành công", "success");
      onSuccess?.(response.data.user);
    } else {
      showToast(response.data.message || "Đăng ký thất bại", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <input name="lastName" placeholder="Họ" onChange={handleChange} className="input w-full" required />
      <input name="firstName" placeholder="Tên" onChange={handleChange} className="input w-full" required />
      <input name="username" placeholder="Tên đăng nhập" onChange={handleChange} className="input w-full" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input w-full" required />
      <input name="password" type="password" placeholder="Mật khẩu" onChange={handleChange} className="input w-full" required />
      <input name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu" onChange={handleChange} className="input w-full" required />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded font-bold">
        Đăng ký
      </button>
    </form>
  );
}

export default RegisterForm;
