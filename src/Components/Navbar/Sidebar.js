import { createElement as $ } from "react";
import { Container } from "./SidebarStyles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
// icon context gives styles to all icons at once

const Sidebar = ({ sidebar, toggleSidebar }) => {
  return $(
    Container,
    null,
    $(
      "nav",
      { className: sidebar ? "nav-menu active" : "nav-menu" },

      $(
        "ul",
        {
          className: "nav-menu-items",
        },
        $(
          "li",
          { className: "navbar-toggle" },
          $(
            Link,
            {
              to: "#",
              className: "close-bars",
              onClick: () => toggleSidebar(),
            },
            $(AiIcons.AiOutlineClose)
          )
        ),
        SideBarData.map((item, index) => {
          return $(
            "li",
            {
              key: index,
              className: item.cName,
            },
            $(
              Link,
              { to: item.path, element: item.element },
              item.icon,
              $("span", null, item.title)
            )
          );
        })
      )
    )
  );
};

export default Sidebar;
