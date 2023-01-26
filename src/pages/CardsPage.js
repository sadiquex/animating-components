import Cards from "../Components/Cards/Cards";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const CardsPage = ({ hideSidebar }) => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Cards, { hideSidebar })
  );
};

export default CardsPage;
