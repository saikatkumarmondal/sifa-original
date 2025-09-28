import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";

import ErrorPage from "./pages/ErrorPage.jsx";

import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Elevators from "./components/Elevators.jsx";
import Escalator from "./components/Escalator.jsx";
import Sparepartss from "./components/Sparepartss.jsx";
import ContactUs from "./components/ContactUs.jsx";
import NewsRoom from "./components/NewsRoom.jsx";
import Career from "./components/Career.jsx";
import ElevatorDetails from "./components/ElevatorDetails.jsx";
import EscalatorDetails from "./components/EscalatorDetails.jsx";
import SparePartsTable from "./components/SparePartsTable.jsx";
import SparePartsForm from "./components/SparePartsForm.jsx";
import SparePartDetails from "./components/SparePartDetails.jsx";
import Login from "./components/Login.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Forbidden from "./components/Forbidden.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import EditCategoryForm from "./components/EditCategoryForm.jsx";

const queryClient = new QueryClient();

// Get the user from localStorage (or context)

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "elevator", Component: Elevators },
      { path: "escalator", Component: Escalator },
      { path: "spare-parts", Component: Sparepartss },
      { path: "contact", Component: ContactUs },
      { path: "newsroom", Component: NewsRoom },
      { path: "career", Component: Career },
      { path: "/spare-parts/:id", Component: SparePartDetails },
      { path: "elevators/:type", Component: ElevatorDetails },
      { path: "escalator/:type", Component: EscalatorDetails },
      { path: "login", Component: Login },
      { path: "/forbidden", Component: Forbidden },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <SparePartsTable /> },
      { path: "add", element: <SparePartsForm /> },
      {
        path: "edit-category/:id",
        element: <EditCategoryForm key={window.location.pathname} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
