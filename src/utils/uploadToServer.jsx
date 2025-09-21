// utils/uploadToServer.js
import axios from "axios";

export const uploadToServer = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    // Make sure to point to the correct backend port
    const res = await axios.post("http://localhost:7777/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.url; // backend should return { url: '...' }
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
};
