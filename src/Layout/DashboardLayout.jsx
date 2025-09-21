// DashboardLayout.jsx
import { useState, useEffect } from "react";
import { FaList, FaPlus } from "react-icons/fa";
import axios from "axios";
import CategoryList from "../components/CategoryList";
import SparePartsForm from "../components/SparePartsForm";
import Loading from "../components/Loading";

const DashboardLayout = () => {
  const [activeMenu, setActiveMenu] = useState("all-categories");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:7777/api/me", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 shadow-md p-6 flex flex-col transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Admin Dashboard
        </h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => setActiveMenu("all-categories")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors ${
              activeMenu === "all-categories"
                ? "bg-gray-200 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaList /> All Categories
          </button>

          <button
            onClick={() => setActiveMenu("add-category")}
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
            {activeMenu === "all-categories"
              ? "All Categories"
              : "Add Category"}
          </h2>
        </div>

        {/* Render components based on active menu */}
        {activeMenu === "all-categories" && <CategoryList />}
        {activeMenu === "add-category" && <SparePartsForm />}
      </main>
    </div>
  );
};

export default DashboardLayout;
