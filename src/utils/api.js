import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL; // Đổi thành ngrok nếu cần

export const downloadVideo = (url) => axios.post(`${API_BASE}/download_video`, { url });
export const analyzeVideo = (question) => axios.post(`${API_BASE}/analyze_video`, { question });
export const getResult = () => axios.get(`${API_BASE}/result`);
