import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router";
import { FaHome, FaPlus, FaList, FaBoxes } from "react-icons/fa";
import axios from "axios";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [spareParts, setSpareParts] = useState([]);
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

  // Compute dashboard stats
  const totalParts = spareParts.length;
  const recentParts = spareParts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5); // last 5 added
  const lowStockParts = spareParts.filter((part) => part.order <= 5); // example low stock filter

  return (
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
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-600">
                  Total Spare Parts
                </h3>
                <p className="text-4xl font-bold text-indigo-600 mt-2">
                  {totalParts}
                </p>
              </div>

              {/* Recent Spare Parts */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-600">
                  Recently Added
                </h3>
                {recentParts.length === 0 ? (
                  <p className="text-gray-500 mt-2">No recent parts</p>
                ) : (
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {recentParts.map((part) => (
                      <li key={part._id}>{part.title}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Low Stock Spare Parts */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-600">
                  Low Stock Items
                </h3>
                {lowStockParts.length === 0 ? (
                  <p className="text-gray-500 mt-2">No low stock items</p>
                ) : (
                  <ul className="mt-2 list-disc list-inside text-red-600">
                    {lowStockParts.map((part) => (
                      <li key={part._id}>{part.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Render nested routes */}
            <Outlet />
          </>
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
