import styled from "styled-components";
import { createElement as $ } from "react";

const Navbar = () => {
  return $(
    Container,
    null,
    $("nav", { className: "navbar" }),
    $(
      "main",
      null,
      $("h1", null, "Tech Bubble is bursting"),
      $(
        "p",
        null,
        " veniam enim aliquam provident ex fuga eos quam facilis. Architecto nisi soluta nobis nulla doloribus temporibus quidem, maxime deleniti eos harum illo, accusamus laudantium ipsum iste, iusto asperiores illum ea aspernatur iure repudiandae? Tenetur sint id et perspiciatis, explicabo voluptate voluptatem asperiores minima dignissimos. Quasi corporis consequatur, recusandae explicabo culpa accusamus. Laborum consectetur provident ipsum quasi laboriosam, quo, est officiis  veniam enim aliquam provident ex fuga eos quam facilis. Architecto nisi soluta nobis nulla doloribus temporibus quidem, maxime deleniti eos harum illo, accusamus laudantium ipsum iste, iusto asperiores illum ea aspernatur iure repudiandae? Tenetur sint id et perspiciatis, explicabo voluptate voluptatem asperiores minima dignissimos. Quasi corporis consequatur, recusandae explicabo culpa accusamus. Laborum consectetur provident ipsum quasi laboriosam, quo, est officiis voluptatem et sequi nihil nemo dignissimos perspiciatis voluptatum blanditiis sapiente, voluptatibus animi voluptas error officia neque. veniam enim aliquam provident ex fuga eos quam facilis. Architecto nisi soluta nobis nulla doloribus temporibus quidem, maxime deleniti eos harum illo, accusamus laudantium ipsum iste, iusto asperiores illum ea aspernatur iure repudiandae? Tenetur sint id et perspiciatis, explicabo voluptate voluptatem asperiores minima dignissimos. Quasi corporis consequatur, recusandae explicabo culpa accusamus. Laborum consectetur provident ipsum quasi laboriosam, quo, est officiis voluptatem et sequi nihil nemo dignissimos perspiciatis voluptatum blanditiis sapiente, voluptatibus animi voluptas error officia neque.voluptatem et sequi nihil nemo dignissimos perspiciatis voluptatum blanditiis sapiente, voluptatibus animi voluptas error officia neque.o"
      )
    )
  );
};

export default Navbar;

export const Container = styled.div`
  :root {
    font-size: 10px;
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
  }
  h1 {
    font-weight: bolder;
  }
  main {
    margin-left: 80px;
  }

  .navbar {
    width: 80px;
    height: 100vh;
    position: fixed;
    background: var(--bg-primary);
  }

  font-size: 2rem;
  border: 2px solid red;
`;
