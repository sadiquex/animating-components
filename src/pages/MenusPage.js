import Menus from "../Components/Menus/Menus";
import { createElement as $ } from "react";
import { motion } from "framer-motion";
const MenusPage = ({ hideSidebar }) => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Menus, { hideSidebar })
  );
};

export default MenusPage;
