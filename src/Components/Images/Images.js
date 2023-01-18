import { createElement as $ } from "react";
import { Container, Heading, Description } from "../../ComponentStyles";

const Images = ({ hideSidebar }) => {
  return $(
    Container,
    { onClick: () => hideSidebar() },
    $(Heading, null, "the images"),
    $(Description, null, "there is going to be animated images in this section")
  );
};

export default Images;
