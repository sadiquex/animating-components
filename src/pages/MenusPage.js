import Menus from "../Components/Menus/Menus";
import { createElement as $ } from "react";

const MenusPage = ({ hideSidebar }) => {
  return $(Menus, { hideSidebar });
};

export default MenusPage;
