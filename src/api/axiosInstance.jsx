import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:7777",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Example interceptor (uncomment to use)
// axiosInstance.interceptors.request.use(
//   config => {
//     // Add auth token or other logic here
//     return config;
//   },
//   error => Promise.reject(error)
// );

export default axiosInstance;
