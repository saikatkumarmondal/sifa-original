// utils/uploadToServer.js
import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export const uploadToServer = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    // Make sure to point to the correct backend port
  const res = await axiosInstance.post("/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.url; // backend should return { url: '...' }
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
};
