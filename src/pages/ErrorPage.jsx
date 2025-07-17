import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
