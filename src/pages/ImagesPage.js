import Images from "../Components/Images/Images";
import { createElement as $ } from "react";

const ImagesPage = ({ hideSidebar }) => {
  return $(Images, { hideSidebar });
};

export default ImagesPage;
