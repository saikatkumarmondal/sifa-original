// useAxios.jsx
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://148.66.154.205:7777";

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
