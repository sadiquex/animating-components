import { createElement as $ } from "react";
import Components from "./Components";
// import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import * as FaIcons from "react-icons/fa";

import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import ImagesPage from "./pages/ImagesPage";
import LoadersPage from "./pages/LoadersPage";
import MenusPage from "./pages/MenusPage";

function App() {
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
        element: $(Components, { hideSidebar }),
      }),
      $(Route, {
        path: "/buttons",
        exact: true,
        element: $(ButtonsPage),
      }),
      $(Route, {
        path: "/cards",
        exact: true,
        element: $(CardsPage),
      }),
      $(Route, { path: "/images", exact: true, element: $(ImagesPage) }),
      $(Route, { path: "/loaders", exact: true, element: $(LoadersPage) }),
      $(Route, { path: "/menus", exact: true, element: $(MenusPage) })
    )
  );
}

export default App;

const Container = styled.div`
  /* open bars */
  position: relative;
`;

const Menu = styled.div`
  font-size: 2rem;
  position: fixed;
  left: 30px;
  top: 30px;
  z-index: 10;
  cursor: pointer;
  padding: 20px;
  background: #002a32;
  color: #fff;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
