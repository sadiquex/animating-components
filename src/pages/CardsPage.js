import Cards from "../Components/Cards/Cards";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const CardsPage = () => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    $(Cards)
  );
};

export default CardsPage;
