import { createElement as $ } from "react";
import { Container, Card1, Card2, Card3 } from "./CardsStyles";

const Cards = () => {
  return $(
    Container,
    null,
    $(
      Card1,
      null,
      $(
        "div",
        { className: "content" },
        ("h2", null, "Card 1"),
        $(
          "p",
          null,
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sed quo omnis nemo in! Consectetur nulla vel error numquam voluptates?"
        ),
        $("a", { href: "#" }, "Read More")
      )
    ),

    $(
      Card2,
      null,
      $(
        "div",
        { className: "card" },
        $(
          "div",
          { className: "imgbox" },
          $("img", {
            src: "https://images.pexels.com/photos/14942206/pexels-photo-14942206.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
            alt: "the image",
          })
        ),
        $(
          "div",
          { className: "details" },
          $("h2", null, "Your Name", $("br"), $("span", null, "title"))
        )
      )
    ),
    $(
      Card3,
      null,
      $(
        "div",
        { className: "card" },
        $(
          "div",
          { className: "imgbox" },
          $("img", {
            src: "https://images.pexels.com/photos/12124029/pexels-photo-12124029.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
          })
        ),
        $(
          "div",
          { className: "content" },
          $("h3", null, "post title"),
          $(
            "p",
            null,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum incidunt voluptate vero maiores quae reprehenderit voluptatem rerum veniam amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum incidunt voluptate vero maiores quae reprehenderit voluptatem rerum veniam amet "
          ),
          $("a", { href: "#" }, "Read More")
        )
      )
    )
  );
};

export default Cards;
