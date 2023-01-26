import { createElement as $ } from "react";
import styled from "styled-components";
// different component files
import Buttons from "./Components/Buttons/Buttons";
import Menus from "./Components/Menus/Menus";
import Texts from "./Components/Texts/Texts";
import Cards from "./Components/Cards/Cards";
import Loaders from "./Components/Loaders/Loaders";
import Images from "./Components/Images/Images";
import Grid from "./Components/Grid/Grid";
// facebook navbar
import Navbar from "./Components/FbNavbar/FbNavbar";
import { motion } from "framer-motion";

const Components = ({ hideSidebar }) => {
  return $(
    Wrapper,
    {
      onClick: () => hideSidebar(),

      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Navbar),
    $(Buttons),
    $(Menus),
    $(Cards),
    $(Loaders),
    $(Texts),
    $(Images),
    $(Grid)
  );
};

export default Components;

const Wrapper = styled(motion.div)`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 1rem 0.5rem;
`;
