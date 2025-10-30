import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import axiosInstance from "../api/axiosInstance";
import Loading from "../components/Loading";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axiosInstance.get("/auth/me"); // cookie sent automatically
        if (res.data.role === "admin") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("AdminRoute error:", err.response?.data);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) return <Loading></Loading>;

  if (!isAdmin)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default AdminRoute;
