/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Save the current location in state to redirect after login
        navigate("/login", { replace: true, state: { from: location } });
        return;
      }

      try {
        console.log("inside try");
        const res = await axios.get("http://148.66.154.205:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("localhost:7777/me", res);

        if (res.data.role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/login", { replace: true });
        }
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true, state: { from: location } });
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [navigate, location]);

  if (loading) return <p>Loading...</p>;
  if (!isAdmin) return null;

  return children;
};

export default AdminRoute;
