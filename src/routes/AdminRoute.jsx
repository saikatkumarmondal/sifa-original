// src/components/AdminRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:7777/api/me", {
          withCredentials: true, // important! sends the cookie
        });

        setUser(res.data); // store logged-in user
        if (res.data.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          navigate("/login"); // redirect non-admin users
        }
      } catch (err) {
        console.error(err);
        navigate("/login"); // redirect if not logged in
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (!isAdmin) return null; // hide content for non-admin

  return children;
};

export default AdminRoute;
