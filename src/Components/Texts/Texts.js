import { createElement as $ } from "react";
import { TextDiv, Text1, Text2, Text3, Text4, Text5 } from "./TextStyles";
import { Container, Heading, Description } from "../../ComponentStyles";

const Texts = () => {
  return $(
    Container,
    null,
    $(Heading, null, "Texts animations"),
    $(Description, null, "these are animated text fxs"),
    $(
      TextDiv,
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
      ),
      $(
        Text4,
        null,
        $(
          "ul",
          null,
          $("li", null, "S"),
          $("li", null, "M"),
          $("li", null, "O"),
          $("li", null, "K"),
          $("li", null, "E")
        )
      ),
      $(Text5, null, $("h1", null, "CSS IS AWESOME!"))
    )
  );
};

export default Texts;
