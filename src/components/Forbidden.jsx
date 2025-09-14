// src/components/Forbidden.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLock } from "react-icons/md";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        <MdLock className="text-6xl text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-gray-800">403 Forbidden</h1>
        <p className="text-gray-600 mb-6">
          Oops! You don’t have permission to access this page.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Forbidden;
