import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {
  MdEdit,
  MdDelete,
  MdAdd,
  MdArrowDropDown,
  MdArrowRight,
} from "react-icons/md";
import { ObjectId } from "bson";

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
const BACKEND_URL = "http://localhost:7777";

// ImgBB upload helper
const uploadToImgbb = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    { method: "POST", body: formData }
  );
  if (!res.ok) throw new Error("ImgBB upload failed");
  const data = await res.json();
  return data.data.url;
};

const PartNode = ({ node, onRefetch }) => {
  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(node.title);
  const [description, setDescription] = useState(node.description);
  const [image, setImage] = useState(node.images?.[0] || "");

  useEffect(() => {
    setTitle(node.title);
    setDescription(node.description);
    setImage(node.images?.[0] || "");
  }, [node]);

  // --- Save node ---
  const handleSave = async () => {
    if (!node._id) {
      Swal.fire("Error", "Node ID is missing", "error");
      return;
    }
    try {
      const res = await axios.put(`${BACKEND_URL}/api/spareparts/${node._id}`, {
        title,
        description,
        images: image ? [image] : [],
      });
      if (res.status === 200) {
        Swal.fire("Success", "Node updated!", "success");
        setEditing(false);
        onRefetch(); // Refresh tree to update child & grandchild IDs
      } else {
        Swal.fire("Error", "Failed to update node", "error");
      }
    } catch (err) {
      console.error("Update error:", err.response || err);
      Swal.fire("Error", "Failed to update node", "error");
    }
  };

  // --- Delete node ---
  const handleDelete = async () => {
    if (!node._id) {
      Swal.fire("Error", "Node ID is missing", "error");
      return;
    }
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete the node and its children!",
      icon: "warning",
      showCancelButton: true,
    });
    if (!confirm.isConfirmed) return;

    try {
      const res = await axios.delete(
        `${BACKEND_URL}/api/spareparts/${node._id}`
      );
      if (res.status === 200) {
        Swal.fire("Deleted!", "Node has been deleted.", "success");
        onRefetch();
      } else {
        Swal.fire("Error", "Failed to delete node", "error");
      }
    } catch (err) {
      console.error("Delete error:", err.response || err);
      Swal.fire("Error", "Failed to delete node", "error");
    }
  };

  // --- Add child ---

  // --- Upload image ---
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const url = await uploadToImgbb(file);
      setImage(url);
    } catch (err) {
      console.error("Image upload error:", err);
      Swal.fire("Error", "Failed to upload image", "error");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-3 p-4">
      <div className="flex items-center justify-between gap-4">
        {editing ? (
          <div className="flex flex-col gap-2 w-full">
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="flex gap-2 mt-1">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-4 flex-grow">
              <h3 className="font-bold text-lg">{node.title}</h3>
              <p className="text-sm text-gray-600">{node.description}</p>
              {image && (
                <img
                  src={image}
                  alt={node.title}
                  className="w-16 h-16 rounded object-cover"
                />
              )}
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => setEditing(true)}>
                <MdEdit className="h-5 w-5 text-blue-500" />
              </button>
              <button onClick={handleDelete}>
                <MdDelete className="h-5 w-5 text-red-500" />
              </button>

              <button onClick={() => setExpanded(!expanded)}>
                {expanded ? <MdArrowDropDown /> : <MdArrowRight />}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Recursive children */}
      {expanded &&
        (node.children || []).map((child, idx) => (
          <PartNode
            key={child._id?.toString() || idx}
            node={child}
            onRefetch={onRefetch} // ensures updated tree
          />
        ))}
    </div>
  );
};

export default PartNode;
