import Grid from "../Components/Grid/Grid";
import { createElement as $ } from "react";

const GridPage = ({ hideSidebar }) => {
  return $(Grid, { hideSidebar });
};

export default GridPage;
