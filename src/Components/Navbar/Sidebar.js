import { createElement as $ } from "react";
import { Container } from "./SidebarStyles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBarData } from "./SidebarData";
import { IconContext } from "react-icons";
// icon context gives styles to all icons at once

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return $(
    Container,
    null,
    $(
      IconContext.Provider,
      { value: "red" },
      $(
        "div",
        { className: "navbar" },
        $(
          Link,
          { to: "#", className: "menu-bars" },
          $(FaIcons.FaBars, { onClick: () => showSidebar() })
        )
      ),
      $(
        "nav",
        { className: sidebar ? "nav-menu active" : "nav-menu" },
        $(
          "ul",
          { className: "nav-menu-items", onClick: () => showSidebar() },
          $(
            "li",
            { className: "navbar-toggle" },
            $(
              Link,
              { to: "#", className: "menu-bars" },
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
              $(Link, { to: item.path }, item.icon, $("span", null, item.title))
            );
          })
        )
      )
    )
  );
};

export default Sidebar;
