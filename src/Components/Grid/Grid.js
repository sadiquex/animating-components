import { Container, Heading, Description } from "../../ComponentStyles";
import { createElement as $, Suspense } from "react";
import { GridDiv, NormalGrid, PhotoGrid, AnimatedGrid } from "./GridStyles";
import { Loader8 } from "../Loaders/LoadersStyles";

const Grid = () => {
  return $(
    Container,
    null,
    $(Heading, null, "grid components"),
    $(
      Description,
      null,
      "auto responsive grid cards layout using minmax and autofit properties in grid"
    ),
    $(Loader8, null, "grid components"),

    $(
      AnimatedGrid,
      null,
      $(Heading, null, "Animated ones"),
      $(Description, null, "This cards are animated"),
      $(
        "div",
        { className: "animated-grid" },
        $("div", { className: "card" }, "a"),
        $("div", { className: "card" }, "b"),
        $("div", { className: "card" }, "c"),
        $("div", { className: "card" }, "d"),
        $("div", { className: "card" }, "e"),
        $("div", { className: "card" }, "f"),
        $("div", { className: "card" }, "g"),
        $("div", { className: "card" }, "h"),
        $("div", { className: "card" }, "i"),
        $("div", { className: "card" }, "j"),
        $("div", { className: "card" }, "k"),
        $("div", { className: "card" }, "l")
      )
    )

    // normal
    // $(
    //   NormalGrid,
    //   null,
    //   $(
    //     "section",
    //     null,
    //     $(
    //       "div",
    //       { className: "basic-grid" },
    //       $(motion.div, { className: "card" }, "1"),
    //       $(motion.div, { className: "card" }, "2"),
    //       $(motion.div, { className: "card" }, "3"),
    //       $(motion.div, { className: "card" }, "4"),
    //       $(motion.div, { className: "card" }, "5"),
    //       $(motion.div, { className: "card" }, "6"),
    //       $(motion.div, { className: "card" }, "7"),
    //       $(motion.div, { className: "card" }, "8"),
    //       $(motion.div, { className: "card" }, "9"),
    //       $(
    //         motion.div,
    //         { className: "card", whileHover: { scale: 1.2 } },
    //         "10"
    //       ),
    //       $(motion.div, { className: "card", whileHover: { scale: 1.2 } }, "11")
    //     )
    //   )
    // ),

    // photo grid
    // !!!!!!!!!!!!!!!!!!!!
    // $(
    //   PhotoGrid,
    //   null,
    //   $(Heading, null, "photo grid"),
    //   $(Description, null, "animated photo grid"),
    //   $(
    //     "div",
    //     { className: "photo-grid" },
    //     $(
    //       "div",
    //       {
    //         className: "card card-tall",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/house)",
    //         },
    //       },
    //       "1"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random)",
    //         },
    //       },
    //       "2"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card card-wide",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/kids)",
    //         },
    //       },
    //       "3"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card fourth",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/phone)",
    //         },
    //       },
    //       "4"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/motor)",
    //         },
    //       },
    //       "5"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/car)",
    //         },
    //       },
    //       "6"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/school)",
    //         },
    //       },
    //       "7"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/sea)",
    //         },
    //       },
    //       "8"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/river)",
    //         },
    //       },
    //       "9"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/women)",
    //         },
    //       },
    //       "10"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/cars)",
    //         },
    //       },
    //       "11"
    //     ),
    //     $(
    //       "div",
    //       {
    //         className: "card",
    //         style: {
    //           backgroundImage: "url(https://source.unsplash.com/random/bridge)",
    //         },
    //       },
    //       "12"
    //     )
    //   )
    // )
  );
};

export default Grid;
