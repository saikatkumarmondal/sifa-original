import React from "react";
import Footer from "../components/Footer";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import axiosInstance from "../api/axiosInstance";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaCogs } from "react-icons/fa";

// Inline SVG Components
const TagIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.586 12.586a2 2 0 0 0 2.828 0l3.04-3.04a2 2 0 0 0 0-2.828l-4.95-4.95A2 2 0 0 0 9.207 2H4a2 2 0 0 0-2 2v5.207a2 2 0 0 0 .586 1.414l4.95 4.95a2 2 0 0 0 2.828 0l3.04-3.04a2 2 0 0 0 0-2.828L12.586 12.586z" />
    <circle cx="7" cy="7" r="1" />
  </svg>
);

const WrenchIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4zm-4.7 4.7l2 2m-2-2l-4-4m-4 4l-4 4m4-4l-4-4" />
  </svg>
);

const BoxIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0h-18M7 3v2M17 3v2m-6 3v10" />
  </svg>
);

const logoPlaceholder = "/logo.png";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      if (res.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-60 bg-emerald-800 flex flex-col items-center pb-6 shadow-xl fixed top-0 left-0 h-full overflow-y-auto z-50">
          {/* Logo */}
          <div className="bg-white w-full flex items-center justify-center">
            <img
              src={logoPlaceholder}
              alt="App Logo"
              className="w-20 h-auto py-5 rounded"
            />
          </div>

          {/* Navigation */}
          <nav className="w-full space-y-2 px-4 py-5">
            {/* Dashboard */}
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard"
                  ? "bg-emerald-600 text-white shadow-inner"
                  : "text-emerald-200 hover:bg-emerald-700 hover:text-white"
              }`}
            >
              <RxDashboard className="mr-3" size={18} />
              Dashboard
            </Link>

            {/* All Categories */}
            <Link
              to="/dashboard/all-categories"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard/all-categories"
                  ? "bg-emerald-600 text-white shadow-inner"
                  : "text-emerald-200 hover:bg-emerald-700 hover:text-white"
              }`}
            >
              <TagIcon className="mr-3 fill-current" />
              All Categories
            </Link>

            {/* All SpareParts */}
            <Link
              to="/dashboard/all-spareparts"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard/all-spareparts"
                  ? "bg-emerald-600 text-white shadow-inner"
                  : "text-emerald-200 hover:bg-emerald-700 hover:text-white"
              }`}
            >
              <WrenchIcon className="mr-3 fill-current" />
              All SpareParts
            </Link>
            {/* Add Category */}

            <Link
              to="/dashboard/add-category"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard/add-category"
                  ? "bg-emerald-600 text-white shadow-inner"
                  : "text-emerald-200 hover:bg-emerald-700 hover:text-white"
              }`}
            >
              <AiOutlineAppstoreAdd className="mr-3 text-lg" />
              Add Category
            </Link>
            {/* Add SpareParts */}
            <Link
              to="/dashboard/add-spareParts"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard/add-spareParts"
                  ? "bg-emerald-600 text-white shadow-inner"
                  : "text-emerald-200 hover:bg-emerald-700 hover:text-white"
              }`}
            >
              <FaCogs className="mr-3 text-lg" />
              Add Spare Part
            </Link>
          </nav>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col ml-60 bg-gray-50 min-h-screen">
          {/* Dashboard Title & Header */}
          <div className="sticky top-0 z-10">
            <div className="flex items-center justify-between p-6 bg-white shadow-lg border-b border-gray-100">
              {/* Title Section */}
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Admin Dashboard
              </h2>

              {/* User/Logout Section */}
              <div className="flex items-center space-x-4">
                {/* Optional: User Name/Profile Info (Placeholder) */}
                <span className="text-gray-600 font-medium hidden sm:block">
                  Hello, Admin
                </span>

                {/* Logout Button (Green Focus) */}
                <div
                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-green-600 hover:shadow-lg"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <FaSignOutAlt size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content (Flex-1 ensures it takes remaining vertical space) */}
          <div className="flex-1 flex flex-col w-full">
            <main className="flex-grow w-full overflow-y-auto">
              <div className="p-8">
                <Outlet />
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
