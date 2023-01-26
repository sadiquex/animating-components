import Buttons from "../Components/Buttons/Buttons";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const ButtonsPage = ({ hideSidebar }) => {
  return (
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Buttons, { hideSidebar })
  );
};

export default ButtonsPage;
