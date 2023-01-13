import { createElement as $ } from "react";
import { Container, Heading, Description } from "../../ComponentStyles";
import {
  ButtonsDiv,
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
  Button11,
  Button12,
  Button13,
  Button14,
  Button15,
  Button16,
  Button17,
} from "./ButtonStyles";

const Buttons = ({ hideSidebar }) => {
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
      ButtonsDiv,
      null,
      $(Button1, null, "Button 1"),
      $(Button2, null, "Button 2"),
      $(Button3, null, "Button 3"),
      $(Button4, null, "Button 4"),
      $(Button5, null, "Button 5"),
      $(Button6, null, "Button 6"),
      $(Button7, null, "Button 7"),
      $(Button8, null, "Button 8"),
      $(Button9, null, "Button 9"),
      $(Button10, null, "Button 10"),
      $(Button11, null, "Button 11"),
      $(
        Button12,
        null
        // $("div", null, $("a", { href: "#" }, $("span", null, "Button 12")))
      ),
      $(Button13, null, "Button 13"),
      $(Button14, null, "Button 14"),
      $(Button15, null, $("span", null, "Button 15")),
      $(Button16, null, $("span", null, "Button 16")),
      $(Button17, null, $("span", null, "B"), $("a", null, "utton"))
    )
    // buttons are "a" elements
  );
};

export default Buttons;
