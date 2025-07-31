import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from "react-router";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ScrollNavbar from "../components/ScrollNavbar";


const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <header>
        <Header></Header>

        <Navbar2></Navbar2>
        <ScrollNavbar></ScrollNavbar>
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