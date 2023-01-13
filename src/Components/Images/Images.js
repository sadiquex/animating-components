import { createElement as $ } from "react";
import { Container } from "./ImagesStyles";

const Images = ({ hideSidebar }) => {
  return $("div", { onClick: () => hideSidebar() }, "the images");
};

export default Images;
