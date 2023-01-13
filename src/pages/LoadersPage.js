import Loaders from "../Components/Loaders/Loaders";
import { createElement as $ } from "react";

const LoadersPage = ({ hideSidebar }) => {
  return $(Loaders, { hideSidebar });
};

export default LoadersPage;
