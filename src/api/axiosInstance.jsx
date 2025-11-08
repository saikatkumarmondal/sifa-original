import axios from "axios";

// Load API URL from Vite environment variable (.env)
const baseURL = "https://nbsifa.com";

const axiosInstance = axios.create({
  baseURL, // all requests automatically prefixed with the domain
  withCredentials: true, // for cookies or JWT auth
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
