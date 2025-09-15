// src/components/Forbidden.jsx
import { useNavigate } from "react-router";
import { MdLock } from "react-icons/md";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg text-center relative">
        <MdLock className="text-6xl text-red-500 mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🚫 Access Denied
        </h1>
        <p className="text-gray-600 mb-6">
          You don’t have permission to access this page. Only admins are
          allowed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Go Back Home
        </button>
        <div className="absolute bottom-0 right-0 opacity-10 text-9xl select-none pointer-events-none">
          403
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
