import { createElement as $ } from "react";
import { ComponentsContainer } from "./ComponentsStyles";
// different component files
import Buttons from "./Components/Buttons/Buttons";
import Menus from "./Components/Menus/Menus";
import Texts from "./Components/Texts/Texts";
import Cards from "./Components/Cards/Cards";
import Loaders from "./Components/Loaders/Loaders";
import Images from "./Components/Images/Images";

const Components = ({ hideSidebar }) => {
  return $(
    ComponentsContainer,
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
