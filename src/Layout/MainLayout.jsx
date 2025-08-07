import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ScrollNavbar from "../components/ScrollNavbar";

import { useEffect } from "react";
import AOS from "aos";
const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration
      once: true, // animate only once when scrolling down
    });
    AOS.refresh(); // refresh to detect new elements
  }, []);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCareer = location.pathname === "/career";
  const isContact = location.pathname === "/contact";
  return (
    <>
      <header>
        <Header></Header>

        <Navbar2></Navbar2>
        <ScrollNavbar />
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
