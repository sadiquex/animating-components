import Loaders from "../Components/Loaders/Loaders";
import { createElement as $ } from "react";
import { motion } from "framer-motion";

const LoadersPage = ({ hideSidebar }) => {
  return $(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    $(Loaders, { hideSidebar })
  );
};

export default LoadersPage;
