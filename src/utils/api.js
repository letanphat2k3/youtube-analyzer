import axios from "axios";

// Đảm bảo biến môi trường được thiết lập đúng trong .env
// 📁 src/utils/api.js

const NODE_API = "http://localhost:8000"; // cho đăng ký user
const MODEL_API = process.env.REACT_APP_API_BASE_URL; // cho Qwen2-VL

// Đăng ký người dùng (Node backend)
export const registerUser = (data) =>
  axios.post(`${NODE_API}/api/register`, data);

// FastAPI: Tải video
export const downloadVideo = (url) =>
  axios.post(`${MODEL_API}/download_video`, { url });

// FastAPI: Phân tích video
export const analyzeVideo = (question, mode = "chi_tiet") =>
  axios.post(`${MODEL_API}/analyze_video`, { question, mode });

// FastAPI: Lấy kết quả
export const getResult = () =>
  axios.get(`${MODEL_API}/result`);

