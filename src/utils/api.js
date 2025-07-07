import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const downloadVideo = (url) => axios.post(`${API_BASE}/download_video`, { url });
export const analyzeVideo = (question, mode = "chi_tiet") =>
  axios.post(`${API_BASE}/analyze_video`, { question, mode });
export const getResult = () => axios.get(`${API_BASE}/result`);
