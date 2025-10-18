import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const EditCategoryForm = ({ categoryId, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentCategories, setParentCategories] = useState([]);
  const [parentId, setParentId] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("/categories");
        const parents = data.filter(
          (cat) => !cat.parentId && cat._id !== categoryId
        );
        setParentCategories(parents);

        const categoryRes = await axiosInstance.get(`/categories`);
        const category = findCategoryById(categoryRes.data, categoryId);
        if (category) {
          setName(category.name);
          setDescription(category.description || "");
          setParentId(category.parentId || null);
          setImagePreview(category.image ? `/uploads/${category.image}` : null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  const findCategoryById = (cats, id) => {
    for (let cat of cats) {
      if (cat._id === id) return cat;
      if (cat.children) {
        const found = findCategoryById(cat.children, id);
        if (found) return found;
      }
    }
    return null;
  };

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
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (parentId) formData.append("parentId", parentId);
    if (image) formData.append("image", image);

    try {
      await axiosInstance.put(`/categories/${categoryId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
          placeholder="Category Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="border px-3 py-2 rounded"
          placeholder="Description"
        />
        <select
          className="border px-3 py-2 rounded"
          value={parentId || ""}
          onChange={(e) => setParentId(e.target.value || null)}
        >
          <option value="">-- No parent --</option>
          {parentCategories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input type="file" onChange={handleImageChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        )}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCategoryForm;
