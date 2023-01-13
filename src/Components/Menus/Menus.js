import { createElement as $ } from "react";
import { Menu1, Menu2, Menu3, Menu4 } from "./MenuStyles";
import { Container, Heading, Description } from "../../ComponentStyles";

const Menus = ({ hideSidebar }) => {
  return $(
    Container,
    { onClick: () => hideSidebar() },

    $(Heading, null, "Menu Components"),
    $(Description, null, "These are the menus"),
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
    )
  );
};

export default Menus;
