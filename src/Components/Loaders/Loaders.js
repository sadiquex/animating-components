import { createElement as $ } from "react";
import { Container, Heading, Description } from "../../ComponentStyles";

import {
  LoadersDiv,
  Loader1,
  Loader2,
  Loader3,
  Loader4,
  Loader5,
  Loader6,
  Loader7,
  Loader8,
  Loader9,
  Loader10,
} from "./LoadersStyles";

const Loaders = ({ hideSidebar }) => {
  return $(
    Container,
    { onClick: () => hideSidebar() },
    $(Heading, null, "Beautiful Animated Buttons"),
    $(
      Description,
      null,
      "These buttons are built using Vanilla Css. They are 100% reusable and modifiable components. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque beatae quiducimus saepe eos, omnis obcaecati consequuntur ab ipsam voluptatem cum repella asperiores. Quod nam tenetur doloribus eveniet voluptatum"
    ),
    $(
      LoadersDiv,
      null,

      $(
        Loader1,
        null,
        $(
          "ul",
          null,
          $("li", null),
          $("li", null),
          $("li", null),
          $("li", null),
          $("li", null)
        )
      ),
      // loader 2
      $(
        Loader2,
        null,
        $("div", { className: "line" }, $("div", { className: "hexagon" }))
      ),
      // loader 3
      $(
        Loader3,
        null,
        $(
          "div",
          { className: "loader" },
          $(
            "div",
            { className: "outer" },
            $("div", { className: "middle" }),
            $("div", { className: "inner" }),
            $("div", { className: "dot" })
          )
        )
      ),
      $(Loader4, null, $("div", { className: "loading" })),
      $(
        Loader5,
        null,
        $(
          "div",
          { className: "cradle" },
          $("span"),
          $("span"),
          $("span"),
          $("span"),
          $("span")
        )
      ),
      $(
        Loader6,
        null,
        $(
          "div",
          { className: "loader" },
          $("span", { className: "s1" }),
          $("span", { className: "s2" }),
          $("span", { className: "s3" }),
          $("span", { className: "s4" }),
          $("span", { className: "s5" }),
          $("span", { className: "s6" }),
          $("span", { className: "s7" }),
          $("span", { className: "s8" }),
          $("span", { className: "s9" })
        )
      ),
      $(Loader7, null, $("div", { className: "loading" })),
      $(Loader8, null, $("h1", null, "LOADING ...")),
      $(
        Loader9,
        null,
        $(
          "div",
          { className: "container" },
          $("span"),
          $("span"),
          $("span"),
          $("span")
        )
      ),
      $(
        Loader10,
        null,
        $(
          "div",
          { className: "loader" },
          $("span"),
          $("span"),
          $("span"),
          $("span"),
          $("span"),
          $("span")
        )
      )
    )
  );
};

export default Loaders;
