import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from "react-router";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfessionalNavbar from "../components/ProfessionalNavbar";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {/* <DropdownMenu></DropdownMenu> */}

      <header>
        <Header></Header>
        {/* <ProfessionalNavbar></ProfessionalNavbar> */}
        <Navbar2></Navbar2>
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