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
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        navigate(from, { replace: true }); // redirect if valid
      } catch (err) {
        localStorage.removeItem("token"); // remove invalid token
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! Redirecting...");

      console.log("resdddd", res);

      // Redirect immediately after login
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
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
