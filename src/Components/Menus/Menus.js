import { createElement as $ } from "react";
import { Container, Heading, Menu1, Menu2, Menu3, Menu4 } from "./MenuStyles";

const Menus = () => {
  return $(
    Container,
    null,
    $(
      "div",
      null,
      $(Heading, null, "These are the menus"),
      // arrayOfMenu.map((menu, index) =>
      //   $(menu.MenuName, { key: index }, $(menu.MenuUl, null, $(menu.MenuLi, null, $(menu.MenuA, {}, menu.LinkName))))

      // arrayOfMenu.map((menu, index) =>
      //   <menu.MenuName
      //     key={index} >
      //     <menu.MenuUl>
      //       <menu.MenuLi>
      //         <menu.MenuA href="#">
      //           {menu.LinkName}
      //         </menu.MenuA>
      //       </menu.MenuLi>

      //     </menu.MenuUl>
      //   </menu.MenuName >

      // ),

      // in the above, i'm trying to map through arrayOfMenu to create a tag with name(MenuName)
      // the others work,but only the tag Name isn't
      $(
        Menu2,
        null,
        $(
          "ul",
          null,
          $("li", null, $("a", { href: "#" }, "Home")),
          $("li", null, $("a", { href: "#" }, "About")),
          $("li", null, $("a", { href: "#" }, "Services")),
          $("li", null, $("a", { href: "#" }, "Portfolio")),
          $("li", null, $("a", { href: "#" }, "Contact"))
        )
      ),
    )
  );
};

const arrayOfMenu = [
  {
    MenuName: "Menu1",
    MenuUl: "ul",
    MenuLi: "li",
    MenuA: "a",
    AHref: "#",
    MenuData: "",
    LinkName: "Home",
  },

]

export default Menus;
