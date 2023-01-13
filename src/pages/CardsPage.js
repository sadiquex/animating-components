import Cards from "../Components/Cards/Cards";
import { createElement as $ } from "react";

const CardsPage = ({ hideSidebar }) => {
  return $(Cards, { hideSidebar });
};

export default CardsPage;
