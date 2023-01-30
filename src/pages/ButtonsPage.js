import Buttons from "../Components/Buttons/Buttons";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const ButtonsPage = () => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    $(Buttons)
  );
};

export default ButtonsPage;
