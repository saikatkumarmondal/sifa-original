import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from "react-router";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      {isHomePage && (
        <footer className="mt-10">
          <Footer />
        </footer>
      )}
    </>
  );
};

export default MainLayout;