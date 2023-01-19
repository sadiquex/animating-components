import { createElement as $ } from "react";
import { Container } from "./SidebarStyles";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
// icon context gives styles to all icons at once

import { motion } from "framer-motion";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  return $(
    Container,

    {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    },
    $(
      "nav",
      { className: sidebar ? "nav-menu active" : "nav-menu" },

      $(
        "ul",
        {
          className: "nav-menu-items",
        },
        SideBarData.map((item, index) => {
          return $(
            motion.li,
            {
              whileHover: {},
              key: index,
              className: item.cName,
              onClick: () => toggleSidebar(),
            },
            $(Link, { to: item.path }, item.icon, $("span", null, item.title))
          );
        })
      )
    )
  );
};

export default Sidebar;
