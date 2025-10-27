import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const BASE_URL = "http://localhost:7777"; // must match backend

export const uploadToServer = async (file) => {
  if (!file) throw new Error("No file provided");

  const formData = new FormData();
  formData.append("image", file); // must match backend multer key

  try {
    const res = await axiosInstance.post(`/api/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true, // in case you need auth cookie
    });
    console.log("Upload success:", res.data);
    return res.data.url; // return uploaded image URL
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
};
