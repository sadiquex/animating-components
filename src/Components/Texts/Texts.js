import { createElement as $ } from "react";
import { Container, Text1, Text2, Text3 } from "./TextStyles";

const Texts = () => {
  return $(
    Container,
    null,
    $(Text1, null, $("h1", null, "Text")),
    $(Text2, null, $("h1", null, "Mayak T & C")),
    $(
      Text3,
      null,
      $(
        "ul",
        null,
        $("li", null, "M"),
        $("li", null, "A"),
        $("li", null, "Y"),
        $("li", null, "A"),
        $("li", null, "K")
      )
    )
  );
};

export default Texts;
