import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;
  position: relative;
  .menu-bars {
    /* z-index: 9000; */
    color: #fff;
    padding: 30px;
    position: sticky;
  }
  .nav-menu {
    background: #002a32;
    width: 250px;
    height: 100vh;
    display: flex;
    z-index: 999;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    /* margin-left: 16px; */
  }

  @media only screen and (max-width: 600px) {
    .nav-menu {
      background: red;
      height: 60%;
    }
  }
  /* close bars */
  .close-bars {
    font-size: 2rem;
    position: fixed;
    left: 50px;
    top: 50px;
    cursor: pointer;
    padding: 20px;
    /* display: {side} */
  }
`;
