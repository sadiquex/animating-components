import { createElement as $ } from "react";
import { ElementsContainer } from "./ElementStyles";
// different component files
import Buttons from "./Components/Buttons/Buttons";
import Menus from "./Components/Menus/Menus";
import Texts from "./Components/Texts/Texts";
import Cards from "./Components/Cards/Cards";
import Loaders from "./Components/Loaders/Loaders";

const Elements = () => {
  return $(
    ElementsContainer,
    null,
    $(Buttons),
    $(Menus),
    $(Cards),
    $(Loaders),
    $(Texts)
  );
};

export default Elements;
