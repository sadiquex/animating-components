import { createElement as $ } from "react";
import NavbarDiv from "./FbNavbarStyles";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

// react icons
import { FaPlus, FaFacebookMessenger, FaCog } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const Navbar = ({ children }) => {
  return $(
    NavbarDiv,
    null,
    $(
      "nav",
      { className: "navbar" },
      $(
        "ul",
        { className: "navbar-nav" },
        $(NavItem, { icon: FaPlus }),
        $(NavItem, { icon: HiOutlineBell }),
        $(NavItem, { icon: FaFacebookMessenger }),
        $(NavItem, { icon: AiFillCaretDown }, $(DropDownMenu))
      )
    )
  );
};

// nav item
const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  // console.log(children);

  return $(
    "li",
    { className: "nav-item" },
    // props is passed here
    $(
      "a",
      { href: "#", className: "icon-button", onClick: () => setOpen(!open) },
      // using icon prop here
      $(icon)
    ),
    open && children
  );
};

// drop down menu
const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setmenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setmenuHeight(height);
  };

  // drop down item
  const DropDownItem = ({ children, gotoMenu, leftIcon, rightIcon }) => {
    return $(
      "a",
      {
        href: "#",
        className: "menu-item",
        onClick: () => gotoMenu && setActiveMenu(gotoMenu),
      },
      $("span", { className: "icon-button" }, leftIcon),
      children,
      $("span", { className: "icon-right" }, rightIcon)
    );
  };

  return $(
    "div",
    { className: "dropdown", style: { height: menuHeight } },
    $(
      CSSTransition,
      {
        in: activeMenu === "main",
        unmountOnExit: true,
        timeout: 500,
        classNames: "menu-primary",
        onEnter: calcHeight,
      },
      $(
        "div",
        { className: "menu" },
        $(DropDownItem, null, "My Profile"),
        $(
          DropDownItem,
          {
            leftIcon: $(FaCog),
            rightIcon: $(AiFillCaretRight),
            gotoMenu: "settings",
          },
          "Settings"
        )
      )
    ),
    // the second menu
    $(
      CSSTransition,
      {
        in: activeMenu === "settings",
        unmountOnExit: true,
        timeout: 500,
        classNames: "menu-secondary",
      },
      $(
        "div",
        { className: "menu" },

        $(DropDownItem, { leftIcon: "y", rightIcon: "z" }, "HTML"),
        $(DropDownItem, null, "CSS"),
        $(DropDownItem, null, "Javascript"),
        $(DropDownItem, null, "ReactJS"),
        $(DropDownItem, null, "NodeJS"),
        $(DropDownItem, null, "Express"),
        $(DropDownItem, null, "MongoDB"),
        $(
          DropDownItem,
          {
            leftIcon: $(FaCog),
            rightIcon: $(AiFillCaretRight),
            gotoMenu: "main",
          },
          "Settings"
        )
      )
    )
  );
};

export default Navbar;
