import { createElement as $ } from "react";
import { Text1, Text2 } from "./TextStyles";

const Texts = () => {
  return $("div", null, $(Text1, null, $("h1", null, "Text")), $(Text2, null, $("h1", null, "Mayak T & C")));
};

export default Texts;
