import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AddCategories = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentCategories, setParentCategories] = useState([]);
  const [parentId, setParentId] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch all categories from correct URL
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/"); // Fixed URL
        const parents = data.filter((cat) => !cat.parentId);
        setParentCategories(parents);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      if (parentId) formData.append("parentId", parentId);
      formData.append("description", description);
      if (image) formData.append("image", image);

      const res = await axiosInstance.post("/categories/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Show success alert
      Swal.fire({
        icon: "success",
        title: "Category Created!",
        text: parentId
          ? `Sub-category "${res.data.name}" under "${
              parentCategories.find((cat) => cat._id === parentId)?.name
            }" has been added successfully.`
          : `Category "${res.data.name}" has been added successfully.`,
        confirmButtonColor: "#6366F1",
      });

      // reset form
      setName("");
      setDescription("");
      setParentId(null);
      setImage(null);
      setImagePreview(null);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.error || "Failed to create category";

      // ✅ Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMsg,
        confirmButtonColor: "#EF4444",
      });

      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Category</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Parent Category (optional)
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={parentId || ""}
            onChange={(e) => setParentId(e.target.value || null)}
          >
            <option value="">-- No parent (top-level) --</option>
            {parentCategories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category Image
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md border mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default AddCategories;
