import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

import axiosInstance from "../api/axiosInstance";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get("/auth/me");
        setUser(res.data); // valid user
      } catch (err) {
        console.error("Invalid token or not authenticated:", err);
        localStorage.removeItem("token"); // remove expired token
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
