import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../pages/Services";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <div>services</div>,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/frontend",
});

export default router;
