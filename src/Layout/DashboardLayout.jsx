import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import CategoryList from "../components/CategoryList";
import AddCategoryForm from "../components/AddCategoryForm";
import EditCategoryForm from "../components/EditCategoryForm";
import Loading from "../components/Loading";
import axios from "axios";
import { motion } from "framer-motion";
import { FaList, FaPlus } from "react-icons/fa";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams(); // grab URL params if needed

  const [activeMenu, setActiveMenu] = useState("all-categories");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }

        const res = await axios.get("http://148.66.154.205:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // ✅ Sync editingCategoryId with URL
  useEffect(() => {
    const match = location.pathname.match(/\/dashboard\/edit-category\/(.+)/);
    if (match) {
      setEditingCategoryId(match[1]); // set state from URL
      setActiveMenu(null); // disable other menus
    } else if (activeMenu === null) {
      setEditingCategoryId(null); // reset if URL doesn't match
      setActiveMenu("all-categories");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (user) setUser(null);
    navigate("/");
  };

  if (loading) return <Loading />;

  return (
    <>
      {/* Header */}
      <motion.div
        className="w-full h-20 flex justify-between items-center px-6 shadow-md text-white font-semibold"
        style={{
          background: "linear-gradient(270deg, #16a34a, #22d3ee, #a855f7)",
          backgroundSize: "600% 600%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <h1 className="text-white text-lg font-semibold">{user?.emailId}</h1>
        <motion.h1
          className="text-2xl font-bold"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            color: ["#fff", "#facc15", "#fff"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ADMIN DASHBOARD
        </motion.h1>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
            Logout
          </button>
        )}
      </motion.div>

      {/* Sidebar + Main */}
      <div className="flex h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <aside
          className={`bg-white w-64 shadow-md p-6 flex flex-col transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Admin Dashboard
          </h1>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setActiveMenu("all-categories");
                setEditingCategoryId(null);
                navigate("/dashboard");
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors ${
                activeMenu === "all-categories"
                  ? "bg-gray-200 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              <FaList /> All Categories
            </button>

            <button
              onClick={() => {
                setActiveMenu("add-category");
                setEditingCategoryId(null);
                navigate("/dashboard/add");
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors ${
                activeMenu === "add-category"
                  ? "bg-gray-200 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              <FaPlus /> Add Category
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {editingCategoryId
                ? "Edit Category"
                : activeMenu === "all-categories"
                ? "All Categories"
                : "Add Category"}
            </h2>
          </div>

          {/* Render based on state */}
          {editingCategoryId ? (
            <EditCategoryForm
              categoryId={editingCategoryId}
              onClose={() => {
                setEditingCategoryId(null);
                navigate("/dashboard");
              }}
            />
          ) : activeMenu === "all-categories" ? (
            <CategoryList setEditingCategoryId={setEditingCategoryId} />
          ) : (
            <AddCategoryForm />
          )}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
