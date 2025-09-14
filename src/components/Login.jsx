import React, { useState } from "react";

// This is a professional and responsive React login component.
// It features a modern dark theme and a clean layout using Tailwind CSS and DaisyUI.
// The component is self-contained in a single file for easy integration.

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login for demonstration
    console.log("Login attempt with:", { email, password });
    setMessage("Login successful! Redirecting...");
    // In a real application, you would handle the API call and authentication here.
    // The "message" state can be used to display success or error messages to the user.
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="card w-full max-w-lg bg-gray-800 text-white shadow-2xl rounded-2xl border border-gray-700">
        <div className="card-body p-6 sm:p-10">
          <div className="text-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-blue-500 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <h2 className="text-4xl font-extrabold text-white">
              Admin Dashboard
            </h2>
            <p className="mt-2 text-gray-400">Please log in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300 font-medium">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300 font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label mt-2">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {message && (
              <div className="p-4 rounded-lg text-center font-semibold text-green-400 bg-green-900 bg-opacity-30">
                {message}
              </div>
            )}

            <div className="form-control pt-4">
              <button
                type="submit"
                className="btn w-full rounded-lg text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
