import { createElement as $ } from "react";
import { Container, Card1 } from "./CardsStyles";

const Cards = () => {
    return $(Container, null, $(Card1, null, $("div", { className: "content" }, ("h2", null, "Card 1"), $("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sed quo omnis nemo in! Consectetur nulla vel error numquam voluptates?"), $("a", { href: "#" }, "Read More"))))
}


export default Cards;