import { createElement as $ } from "react";
import { Container } from "./SidebarStyles";
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  return $(
    Container,
    null,
    $(
      AnimatePresence,
      null,
      $(
        "nav",
        {
          className: sidebar ? "nav-menu active" : "nav-menu",

          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: "2s", type: "spring" },
        },

        $(
          "ul",
          {
            className: "nav-menu-items",
          },
          SideBarData.map((item, index) => {
            return $(
              motion.li,
              {
                whileHover: { scale: 1.09 },
                key: index,
                className: item.cName,
                onClick: () => toggleSidebar(),
              },
              $(Link, { to: item.path }, item.icon, $("span", null, item.title))
            );
          })
        )
      )
    )
  );
};

export default Sidebar;
