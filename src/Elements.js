import { createElement as $ } from "react";
import { Container, Button1, Button2, Button3 } from "./ElementStyles";

const Elements = () => {
  return $(
    "div",
    null,
    $(
      Container,
      null,
      $(Button1, null, $("div", null, "Button 1")),
      $(Button2, null, $("div", null, "Button 2")),
      $(Button3, null, $("div", null, "Button 3"))
    )
  );
};

export default Elements;
