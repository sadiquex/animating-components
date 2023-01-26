import Grid from "../Components/Grid/Grid";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const GridPage = ({ hideSidebar }) => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Grid, { hideSidebar })
  );
};

export default GridPage;
