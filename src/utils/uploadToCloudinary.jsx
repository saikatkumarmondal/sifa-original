// src/utils/uploadToCloudinary.js
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:7777/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");

  const data = await res.json();
  return data.url; // ✅ Cloudinary hosted URL (saved in MongoDB)
};
