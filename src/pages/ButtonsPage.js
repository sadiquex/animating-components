import Buttons from "../Components/Buttons/Buttons";
import { createElement as $ } from "react";

const ButtonsPage = ({ hideSidebar }) => {
  return $(Buttons, { hideSidebar });
};

export default ButtonsPage;
