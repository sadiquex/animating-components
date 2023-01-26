import { createElement as $ } from "react";
// import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import styled from "styled-components";
import { useState } from "react";
import AnimatedRoutes from "./AnimatedRoutes";

// facebook Navbar
const App = () => {
  const [sidebar, setSidebar] = useState(false);

  // functions to toggle and hide navbar
  const toggleSidebar = () => {
    setSidebar(!sidebar);
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
    $(AnimatedRoutes)
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
