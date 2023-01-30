import { createElement as $, useState } from "react";
import {
  MenusDiv,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu5ul,
  Menu5top,
  Menu5Down,
} from "./MenuStyles";
import { Container, Heading, Description } from "../../ComponentStyles";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";

const Menus = ({ hideSidebar }) => {
  // to open sidebar
  const [open, setOpen] = useState(false);

  // handleOpen
  const handleOpen = () => {
    setOpen(!open);
    console.log(111);
  };

  return $(
    Container,
    null,
    $(Heading, null, "Menu Components"),
    $(Description, null, "These are the menus"),
    $(
      MenusDiv,
      // { onClick: () => hideSidebar() },

      $(
        Menu1,
        null,
        $(
          "ul",
          null,
          $("li", null, $("a", { href: "#" }, "Home")),
          $("li", null, $("a", { href: "#" }, "About")),
          $("li", null, $("a", { href: "#" }, "Services")),
          $("li", null, $("a", { href: "#" }, "Portfolio")),
          $("li", null, $("a", { href: "#" }, "Contact"))
        )
      ),
      $(
        Menu2,
        null,
        $(
          "ul",
          null,
          $("li", null, $("a", { href: "#" }, "Home")),
          $("li", null, $("a", { href: "#" }, "About")),
          $("li", null, $("a", { href: "#" }, "Services")),
          $("li", null, $("a", { href: "#" }, "Portfolio")),
          $("li", null, $("a", { href: "#" }, "Contact"))
        )
      ),
      $(
        Menu3,
        null,
        $(
          "ul",
          null,
          $("li", null, $("a", { href: "#", data: "home" }, "Home")),
          $("li", null, $("a", { href: "#", data: "about" }, "About")),
          $("li", null, $("a", { href: "#", data: "services" }, "Services")),
          $("li", null, $("a", { href: "#", data: "portfolio" }, "Portfolio")),
          $("li", null, $("a", { href: "#", data: "contact" }, "Contact"))
        )
      ),
      $(
        Menu4,
        null,
        $(
          "ul",
          null,
          $("li", null, $("a", { href: "#" }, "Home")),
          $("li", null, $("a", { href: "#" }, "About")),
          $("li", null, $("a", { href: "#" }, "Services")),
          $("li", null, $("a", { href: "#" }, "Portfolio")),
          $("li", null, $("a", { href: "#" }, "Contact"))
        )
      ),
      $(
        Menu5,
        { open: open },
        $(
          Menu5top,
          null,
          $("div", { className: "logo", open: open }, "Logo"),
          $(
            "div",
            { className: "menu-icon" },
            $(AiOutlineMenu, {
              open: open,
              onClick: () => handleOpen(),
            })
          )
        ),
        $(
          Menu5ul,
          null,
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          ),
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          ),
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          ),
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          ),
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          ),
          $(
            "li",
            null,
            $(
              "a",
              { href: "#" },
              $(AiFillHome),
              $("p", { open: open, onClick: () => handleOpen() }, "Home")
            )
          )
        ),
        $(Menu5Down, null, "down")
      )
    )
  );
};

export default Menus;
