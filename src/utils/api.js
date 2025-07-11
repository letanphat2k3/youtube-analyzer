import axios from "axios";
const NODE_API = process.env.REACT_APP_NODE_API || "http://localhost:8000";
const API_BASE = process.env.REACT_APP_API_BASE_URL;

// Đăng ký người dùng
export const registerUser = (data) =>
  axios.post(`${NODE_API}/api/register`, data);

// Đăng nhập người dùng
export const loginUser = (data) =>
  axios.post(`${NODE_API}/api/login`, data);

// FastAPI: Tải video
export const downloadVideo = (url) =>
  axios.post(`${API_BASE}/download_video`, { url });

// FastAPI: Phân tích video
export const analyzeVideo = (question, mode = "chi_tiet") =>
  axios.post(`${API_BASE}/analyze_video`, { question, mode });

// FastAPI: Lấy kết quả
export const getResult = () => axios.get(`${API_BASE}/result`);
