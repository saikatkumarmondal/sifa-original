import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7777",
  withCredentials: true, // allow cookies if backend uses them
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Automatically attach token if it exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
