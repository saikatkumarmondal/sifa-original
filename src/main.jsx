import { StrictMode, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Elevators from "./components/Elevators.jsx";
import Escalator from "./components/Escalator.jsx";
import Sparepartss from "./components/Sparepartss.jsx";
import ContactUs from "./components/ContactUs.jsx";
import NewsRoom from "./components/NewsRoom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "elevator",
        Component: Elevators,
      },
      {
        path: "escalator",
        Component: Escalator,
      },
      {
        path: "spare-parts",
        Component: Sparepartss,
      },
      {
        path: "contact",
        Component: ContactUs,
      },
      {
        path: "newsroom",
        Component: NewsRoom,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
