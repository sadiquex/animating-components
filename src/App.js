import { createElement as $ } from "react";
import Components from "./Components";
// import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import ImagesPage from "./pages/ImagesPage";
import LoadersPage from "./pages/LoadersPage";
import MenusPage from "./pages/MenusPage";
import AboutPage from "./pages/AboutPage";
import GridPage from "./pages/GridPage";
// facebook Navbar
const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const hideSidebar = () => {
    setSidebar(false);
  };

  return $(
    Container,
    { className: "App" },
    // $(Navbar),

    null,
    $(
      Menu,
      { to: "#", className: "menu", onClick: () => toggleSidebar() },
      "MENU"
      // $(FaIcons.FaBars, )
    ),
    $(Sidebar, { sidebar, toggleSidebar }),
    $(
      Routes,
      { hideSidebar },
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

export default App;

const Container = styled.div`
  /* open bars */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  font-size: 1.6rem;
  position: fixed;
  /* right: 30px; */
  /* top: 30px; */
  right: 5%;
  top: 10%;
  /* z-index: 10; */
  cursor: pointer;
  padding: 10px 15px;
  background: transparent;
  border: 2px solid #002a32;
  color: #002a32;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  border-radius: 0.25rem;
  transition: all 0.4s ease;

  &:hover {
    background: #002a32;
    color: #fff;
  }
`;
