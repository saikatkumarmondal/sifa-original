import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router";
import { FaHome, FaPlus, FaList, FaBoxes } from "react-icons/fa";
import axios from "axios";
import { HiOutlineLogout } from "react-icons/hi";

import Loading from "../components/Loading";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSpareParts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:7777/api/spareparts"
        );
        setSpareParts(data || []);
      } catch (err) {
        console.error("Failed to fetch spare parts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpareParts();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:7777/api/me", {
          withCredentials: true, // important to send cookie
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err.response?.data || err);
        setUser(null); // not logged in
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      // Call backend logout API
      const response = await fetch("http://localhost:7777/api/logout", {
        method: "POST",
        credentials: "include", // include cookies
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data.message); // "Logged out successfully"

      // Clear frontend state
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userRole");
      setUser(null);

      // Redirect to home page
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return <Loading></Loading>;
  // example low stock filter

  return (
    <>
      <div className="text-center bg-gray-800 text-white p-4">
        <ul className="flex items-center justify-between gap-6">
          <li>
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>

          {/* Show user info only if logged in */}
          {user?.email && (
            <>
              <li className="font-medium">Welcome, {user.email}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 hover:text-red-500 transition-colors"
                >
                  <HiOutlineLogout size={20} />
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex h-screen bg-gray-100 font-sans">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 text-gray-700 bg-white rounded-md shadow-md"
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? <FaList /> : <FaBoxes />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md p-4 flex flex-col z-40
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0`}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Admin Dashboard
          </h1>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/dashboard"
              end
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-200 font-semibold text-indigo-600"
                    : "text-gray-600"
                }`
              }
            >
              <FaList /> Spare Parts List
            </NavLink>
            <NavLink
              to="/dashboard/add"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-200 font-semibold text-indigo-600"
                    : "text-gray-600"
                }`
              }
            >
              <FaPlus /> Add Spare Part
            </NavLink>
            <NavLink
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-600"
            >
              <FaHome /> Back to Site
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Overview
          </h2>

          {loading ? (
            <p>Loading spare parts data...</p>
          ) : (
            <>
              {/* Card-based layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Total Spare Parts */}

                {/* Recent Spare Parts */}

                {/* Low Stock Spare Parts */}
              </div>

              {/* Render nested routes */}
              <Outlet />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
