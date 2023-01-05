import { createElement as $ } from "react";
import { Text1 } from "./TextStyles";

const Texts = () => {
  return $("div", null, $(Text1, null, $("h1", null, "Text")));
};

export default Texts;
