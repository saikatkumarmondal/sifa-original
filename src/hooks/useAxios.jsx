// useAxios.jsx
import axios from "axios";

const BASE_URL = "http://localhost:7777";
// import.meta.env.VITE_BACKEND_URL || "http://localhost:7777";

const useAxios = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default useAxios;
