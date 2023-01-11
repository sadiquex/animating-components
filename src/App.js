import { createElement as $ } from "react";
import Components from "./Components";
import Navbar from "./Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Components/Navbar/Sidebar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";

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
      Link,
      { to: "#", className: "open-bars" },
      $(FaIcons.FaBars, { onClick: () => toggleSidebar() })
    ),
    $(Sidebar, { sidebar, toggleSidebar }),
    $(Components, { hideSidebar })
  );
}

export default App;

const Container = styled.div`
  /* open bars */
  position: relative;
  .open-bars {
    font-size: 2rem;
    position: fixed;
    left: 30px;
    top: 30px;
    z-index: 10;
    cursor: pointer;
    padding: 20px;
    /* background: red; */
  }
`;
