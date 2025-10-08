import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  // Auto-redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await axios.get("http://148.66.154.205:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        navigate(from, { replace: true });
      } catch (err) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!emailId || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // Debug: check payload
      console.log("Sending login:", { emailId, password });

      const res = await axios.post(
        "http://148.66.154.205:7777/login",
        { emailId, password },
        { headers: { "Content-Type": "application/json" } } // no withCredentials
      );

      // Save token
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! Redirecting...");

      // Redirect
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err.response?.data); // Debug server response
      setError(err.response?.data?.error || "Login failed. Try again.");
    }
  };

  if (loading)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
              required
            />
          </div>
          {message && <p className="text-green-400">{message}</p>}
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-bold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
