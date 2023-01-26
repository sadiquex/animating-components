import { createElement as $ } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages
import Components from "./Components";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import ImagesPage from "./pages/ImagesPage";
import LoadersPage from "./pages/LoadersPage";
import MenusPage from "./pages/MenusPage";
import AboutPage from "./pages/AboutPage";
import GridPage from "./pages/GridPage";

// framer motion imports
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  // hide sidebar fn
  const hideSidebar = () => {
    setSidebar(false);
  };

  return $(
    AnimatePresence,
    null,
    $(
      Routes,
      { hideSidebar, location: location, key: location.pathname },
      $(Route, {
        path: "/",
        exact: true,
        element: $(AboutPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/components",
        exact: true,
        element: $(Components, { hideSidebar }),
      }),
      $(Route, {
        path: "/buttons",
        exact: true,
        element: $(ButtonsPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/cards",
        exact: true,
        element: $(CardsPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/images",
        exact: true,
        element: $(ImagesPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/loaders",
        exact: true,
        element: $(LoadersPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/menus",
        exact: true,
        element: $(MenusPage, { hideSidebar }),
      }),
      $(Route, {
        path: "/grid",
        exact: true,
        element: $(GridPage, { hideSidebar }),
      })
    )
  );
};

export default AnimatedRoutes;
