// SparePartsForm.jsx
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  FaPlus,
  FaTrash,
  FaPlusCircle,
  FaChevronDown,
  FaChevronUp,
  FaImage,
} from "react-icons/fa";
import useAxios from "../hooks/useAxios";

const MySwal = withReactContent(Swal);

// --- IMGBB Upload ---
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
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

// --- Recursive SubItem Component ---
const SubItem = ({ nestName, index, control, register, setValue, remove }) => {
  const {
    fields,
    append,
    remove: removeNested,
  } = useFieldArray({
    control,
    name: `${nestName}[${index}].subItems`,
  });

  const currentField = `${nestName}[${index}].image`;
  const [open, setOpen] = useState(true);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const url = await uploadToImgbb(file);
      setValue(currentField, url); // Save URL in form state
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to upload image", "error");
    }
  };

  return (
    <div className="border-l-2 border-gray-300 pl-4 ml-2 mb-2">
      <div className="flex gap-2 items-center mb-2">
        <input
          {...register(`${nestName}[${index}].title`, { required: true })}
          placeholder="Title"
          className="input input-bordered w-full"
        />
        <input
          {...register(`${nestName}[${index}].description`)}
          placeholder="Description"
          className="input input-bordered w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="input input-bordered w-full"
          multiple
        />
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <button type="button" className="btn btn-error" onClick={remove}>
          <FaTrash />
        </button>
      </div>

      {open && (
        <div className="ml-4">
          {fields.map((nested, nestedIndex) => (
            <SubItem
              key={nested.id}
              nestName={`${nestName}[${index}].subItems`}
              index={nestedIndex}
              control={control}
              register={register}
              setValue={setValue}
              remove={() => removeNested(nestedIndex)}
            />
          ))}
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2 flex items-center gap-1"
            onClick={() =>
              append({ title: "", description: "", image: "", subItems: [] })
            }
          >
            <FaPlusCircle /> Add Nested Subitem
          </button>
        </div>
      )}
    </div>
  );
};

// --- Recursive function to prepare nested children for API ---
const prepareChildren = async (children) => {
  if (!children || children.length === 0) return [];
  const result = [];
  for (const child of children) {
    const preparedChild = {
      title: child.title,
      description: child.description || "",
      image: child.image || null, // already uploaded URL
      children: await prepareChildren(child.subItems || []),
    };
    result.push(preparedChild);
  }
  return result;
};

// --- Main SparePartsForm Component ---
const SparePartsForm = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [parentImageUrl, setParentImageUrl] = useState("");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", description: "", image: "", subItems: [] },
  });

  const {
    fields: subItems,
    append: appendSubItem,
    remove: removeSubItem,
  } = useFieldArray({ control, name: "subItems" });

  // --- Parent Image Upload ---
  const handleParentFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const url = await uploadToImgbb(file);
      setParentImageUrl(url);
      setValue("image", url); // Save URL in form state
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to upload parent image", "error");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Prepare nested children recursively
      const children = await prepareChildren(data.subItems);

      const payload = {
        title: data.title,
        description: data.description || "",
        images: parentImageUrl ? [parentImageUrl] : [],
        children,
      };

      await axiosInstance.post("/api/spareparts", payload);

      setLoading(false);
      await MySwal.fire({
        title: <strong>Spare Part Added!</strong>,
        html: (
          <div>
            <p>
              <strong>Title:</strong> {data.title}
            </p>
            {children.length > 0 && (
              <p>
                <strong>Subitems:</strong> {children.length}
              </p>
            )}
          </div>
        ),
        icon: "success",
        confirmButtonText: "OK",
        timer: 5000,
      });

      reset({ title: "", description: "", image: "", subItems: [] });
      setParentImageUrl("");
    } catch (err) {
      console.error(err);
      setLoading(false);
      Swal.fire("Error", "Failed to save spare part", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Add Spare Part</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Parent Spare Part */}
        <div className="flex flex-col gap-2">
          <input
            {...register("title", { required: "Title required" })}
            placeholder="Title"
            className="input input-bordered w-full"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
          <textarea
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />
          <label className="flex items-center gap-2">
            <FaImage /> Upload Parent Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleParentFileChange}
            className="input input-bordered w-full"
            multiple
          />
        </div>

        {/* Subitems */}
        <div className="flex flex-col gap-2">
          {subItems.map((subItem, index) => (
            <SubItem
              key={subItem.id}
              nestName="subItems"
              index={index}
              control={control}
              register={register}
              setValue={setValue}
              remove={() => removeSubItem(index)}
            />
          ))}
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2 flex items-center gap-1"
            onClick={() =>
              appendSubItem({
                title: "",
                description: "",
                image: "",
                subItems: [],
              })
            }
          >
            <FaPlus /> Add Subitem
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          {loading ? "Saving..." : "Save Spare Part"}
        </button>
      </form>
    </div>
  );
};

export default SparePartsForm;
