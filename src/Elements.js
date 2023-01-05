import { createElement as $ } from "react";
import Buttons from "./Components/Buttons/Buttons";
import Menus from "./Components/Menus/Menus";
import Texts from "./Components/Texts/Texts";
import { ElementsContainer } from "./ElementStyles";

const Elements = () => {
  return $(ElementsContainer, null, $(Buttons), $(Menus), $(Texts));
};

export default Elements;
