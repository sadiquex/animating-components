import { createElement as $ } from "react";
import styled from "styled-components";
// different component files
import Buttons from "./Components/Buttons/Buttons";
import Menus from "./Components/Menus/Menus";
import Texts from "./Components/Texts/Texts";
import Cards from "./Components/Cards/Cards";
import Loaders from "./Components/Loaders/Loaders";
import Images from "./Components/Images/Images";

const Components = ({ hideSidebar }) => {
  return $(
    Wrapper,
    { onClick: () => hideSidebar() },
    $(Buttons),
    $(Menus),
    $(Cards),
    $(Loaders),
    $(Texts),
    $(Images)
  );
};

export default Components;

const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 30px;
  padding: 1rem 0.5rem;
`;
