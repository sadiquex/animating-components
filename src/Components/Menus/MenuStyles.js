import styled from "styled-components";

export const Heading = styled.p`
  /* font-size: 2rem; */
`;

export const Container = styled.div`
  border: 2px solid blue;
  width: 100%;
`;

export const OriginalMenu = styled.div`
  padding: 20px 10px;
  margin: 20px 0;
  background: #351435;

  ul {
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }

  li {
    list-style: none;
  }
`;
export const Menu1 = styled(OriginalMenu)`
  background: #fffa65;

  a {
    text-decoration: none;
    color: #000;
    display: block;
    position: relative;
    padding: 10px 0;

    &:hover:before,
    &:hover:after {
      transform: scaleX(1.1);
    }

    &:before {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #000;
      transform: scaleX(0);
      transition: all 0.5s;
      transform-origin: left;
    }
    &:after {
      content: "";
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #000;
      transform: scaleX(0);
      transition: all 0.5s;
      transform-origin: right;
    }
  }
`;

export const Menu2 = styled(OriginalMenu)`
  background: #262626;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    position: relative;
    transition: all 0.5s;
    padding: 5px 5px;

    &:hover {
      background: #e91e63;
      color: #fff;
    }

    &:hover:before {
      opacity: 1;
      bottom: -5px;
      left: -5px;
    }
    &:hover:after {
      opacity: 1;
      top: -5px;
      right: -5px;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 12px;
      left: 12px;
      width: 12px;
      height: 12px;
      /* background: blue; */
      border: 2px solid #e91e63;
      /* border-width: top right bottom left */
      border-width: 0 0 3px 3px;
      opacity: 0;
      transition: all 0.3s;
    }

    &:after {
      content: "";
      position: absolute;
      top: 12px;
      right: 12px;
      width: 12px;
      height: 12px;
      /* background: blue; */
      border: 2px solid #e91e63;
      /* border-width: top right bottom left */
      border-width: 3px 3px 0 0;
      transition: all 0.3s;
      opacity: 0;
    }
  }
`;

export const Menu3 = styled(OriginalMenu)`
  background: #262626;
  font-size: 7rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  li {
    display: block;
  }
  a {
    position: relative;
    display: block;
    text-decoration: none;
    -webkit-text-stroke: 0.4px #fff;
    font-weight: bolder;
    color: transparent;
    text-transform: lowercase;

    /* red layer */
    &:before,
    &::after {
      content: attr(data);
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.5s;
    }

    &:hover:before {
      color: rgb(187, 0, 0);
      z-index: 1;
      -webkit-text-stroke: 0.4px transparent;
      transform: translate(10px, -10px);
    }
    &:hover:after {
      color: rgb(119, 239, 255);
      z-index: 1;
      -webkit-text-stroke: 0.4px transparent;
      transform: translate(15px, -15px);
    }
    /* when we hover the link */
    &:hover {
      color: #fff;
      -webkit-text-stroke: none;
      transition: 0.5s;
    }
  }
`;
export const Menu4 = styled(OriginalMenu)`
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
