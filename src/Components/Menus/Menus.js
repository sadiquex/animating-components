import { createElement as $ } from "react";
import { Container, Heading, Menu1, Menu2 } from "./MenuStyles";

const Menus = () => {
  return $(
    Container,
    null,
    $(
      "div",
      null,
      $(Heading, null, "These are the menus"),
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
      )
    )
  );
};

export default Menus;
