import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Services from "../pages/Services";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/frontend",
});

export default router;
