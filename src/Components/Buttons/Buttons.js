import { createElement as $ } from "react";
import {
  Container,
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
  Button9,
  Button10,
} from "./ButtonStyles";

const Buttons = () => {
  return $(
    "div",
    null,
    $(
      Container,
      null,
      $(Button1, null, $("div", null, "Button 1")),
      $(Button2, null, $("div", null, "Button 2")),
      $(Button3, null, $("div", null, "Button 3")),
      $(Button4, null, $("div", null, "Button 4")),
      $(Button5, null, $("div", null, "Button 5")),
      $(Button6, null, $("div", null, "Button 6")),
      $(Button7, null, $("div", null, "Button 7")),
      $(Button8, null, $("div", null, "Button 8")),
      $(Button9, null, $("div", null, "Button 9")),
      $(Button10, null, $("div", null, "Button 10"))
    )
  );
};

export default Buttons;
