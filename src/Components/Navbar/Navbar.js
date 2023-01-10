import { createElement as $ } from "react";
import { Container } from "./NavbarStyles";

const Navbar = () => {
  return $(
    Container,
    null,
    $(
      "nav",
      { className: "navbar" },
      $(
        "ul",
        { className: "navbar-nav" },
        $(
          "li",
          { className: "logo" },
          $(
            "a",
            { className: "nav-link fa-brands fa-space-awesome", href: "#" },
            $("span", { className: "link-text" }, "Logo")
          )
        ),
        $(
          "li",
          { className: "nav-item" },
          $(
            "a",
            { className: "nav-link fa-solid fa-house", href: "#" },
            $("span", { className: "link-text" }, "Home")
          )
        ),
        $(
          "li",
          { className: "nav-item" },
          $(
            "a",
            { className: "nav-link fa-solid fa-house", href: "#" },
            $("span", { className: "link-text" }, "Home")
          )
        ),
        $(
          "li",
          { className: "nav-item" },
          $(
            "a",
            { className: "nav-link fa-solid fa-house", href: "#" },
            $("span", { className: "link-text" }, "Home")
          )
        ),
        $(
          "li",
          { className: "nav-item" },
          $(
            "a",
            { className: "nav-link fa-solid fa-house", href: "#" },
            $("span", { className: "link-text" }, "Home")
          )
        )
      )
    )
  );
};

export default Navbar;
