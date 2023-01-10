import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    width: 80px;
    height: 100vh;
    position: fixed;
    background: var(--bg-primary);
    background: #002a32;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    z-index: 1000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  /* ul */
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* li */
  .nav-item {
    width: 100%;
    transition: all 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }
  }
  .nav-item:last-child {
    margin-top: auto;
    background: green;
  }

  /* a */
  /* contains the span */
  .nav-link {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 5rem;
    min-width: 32px;
  }

  /* span */
  .link-text {
    text-transform: uppercase;
    display: none;
    margin-left: 16px;
  }

  /* hover navbar */
  .navbar:hover {
    width: 16rem;
  }
  /* show link text on hover */
  .navbar:hover .link-text {
    display: block;
  }

  .logo a {
    transform: rotate(0deg);
    transition: all 0.3s;
  }
  .navbar:hover .logo a {
    transform: rotate(180deg);
  }

  /* small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 80px;
      align-items: center;

      &:hover {
        width: 100%;
      }
    }
    .navbar-nav {
      flex-direction: row;
    }
    .nav-link {
      justify-content: center;
    }

    .logo {
      display: none;
    }
  }
  /* large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 80px;
    }
    .navbar:hover {
      width: 16rem;
    }
    .navbar:hover .link-text {
      display: inline;
      transition: all 0.3s;
    }
  }

  font-size: 2rem;
  border: 2px solid red;
`;
