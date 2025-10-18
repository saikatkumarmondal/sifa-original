import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import axiosInstance from "../api/axiosInstance";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get("/auth/me");

        if (res.data.role === "admin") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("AdminRoute error:", err.response?.data);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default AdminRoute;
