import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";

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
        const res = await axios.get("http://148.66.154.205:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
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
