import styled from "styled-components";

export const ButtonsDiv = styled.div`
  display: flex;
  flex: 0;
  align-items: baseline;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 150px;
  row-gap: 30px;
  width: 100%;

  @media screen and (max-width: 600px) {
    column-gap: 50px;
    row-gap: 30px;
    justify-content: space-around;
  }
`;

export const OriginalButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.6s;
  overflow: hidden;
  cursor: pointer;
  font-size: 16px;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  padding: 0.875rem 1.5rem;
  border: 2px solid #000;
  /* they are here to position the buttons well */
  width: 100px;
`;

export const Button1 = styled(OriginalButton)`
  /* when the button is hovered, apply these on the "before" selector */
  &:hover:before {
    transform: rotate(0deg);
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #fff200;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: top left;
    transform: rotate(-90deg);
    transition: transform 1s;
  }
`;

export const Button2 = styled(OriginalButton)`
  &:hover {
    color: #fff;
  }

  &:hover:before {
    transform: translateY(0);
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #351435;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: left;
    transform: translateY(-100%);
    transition: transform 1s;
  }
`;

export const Button3 = styled(OriginalButton)`
  color: #262626;
  border: 2px solid #262626;

  &:hover {
    color: #fff;
  }

  /* remove rotatiion on pseudo when link is hovered */
  &:hover:before {
    transform: rotateX(0);
  }
  &:hover:after {
    transform: rotateY(0);
  }

  &:before {
    content: "";
    background: #262626;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
    /* make the pseudo element dissapear by rotateX */
    transform: rotateX(90deg);
  }
  &:after {
    content: "";
    background: #262626;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
    /* make the pseudo element dissapear by rotateX */
    transform: rotateY(90deg);
  }
`;

export const Button4 = styled(OriginalButton)`
  color: #e1332d;
  border: 4px solid #e1332d;
  white-space: nowrap;

  &:hover {
    letter-spacing: 10px;
    border: 4px solid #e1332d;
    font-weight: bolder;
  }
`;

export const Button5 = styled(OriginalButton)`
  background: #262626;
  color: #fff;

  &:hover:before {
    transform: translateY(0);
  }

  &:before {
    content: "hell yeah!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e1332d;
    /* z-index: -1; */
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    transform: translateY(-100%);
  }
`;

export const Button6 = styled(OriginalButton)`
  color: #fff;
  background: #262626;

  &:hover {
    background: #f44336;
  }
  &:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20px;
    background: #fff;
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.5s;
  }
`;

export const Button7 = styled(OriginalButton)`
  background: #262626;
  /* color: #fff; */
  &:hover:before {
    transform: translate(100%, -100%);
  }
  &:hover:after {
    transform: translateX(0);
  }

  &:before {
    content: "Before";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff165;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:after {
    content: "After";
    transform: translate(-100%, 100%);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff165;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Button8 = styled(OriginalButton)`
  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
  &:before {
    content: "Before";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    color: #fff;
    transform: scale(3);
    opacity: 0;
    transition: all 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Button9 = styled(OriginalButton)`
  border: 2px solid tomato;
  color: tomato;
  &:hover {
    color: #fff;
  }
  &:hover:before {
    height: 200%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: tomato;
    color: #fff;
    transition: all 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    border-radius: 0 0 50% 50%;
  }
`;
export const Button10 = styled(OriginalButton)`
  background: #f1c40f;
  color: #fff;
  letter-spacing: 2px;
  &:hover:before,
  &:hover:after {
    transform: rotateX(0);
  }

  &:before {
    content: "Before";
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2ce771;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 0.5s;
  }
  &:after {
    content: "After";
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotateX(270deg);
    transform-origin: bottom;
    transition: all 0.5s;
    transition-delay: 0.25s;
  }
`;

export const Button11 = styled(OriginalButton)`
  text-transform: uppercase;
  position: relative;
  // color: transparent;
  color: #fff;
  // overflow: visible;

  &:before {
    content: "before";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }

  &:hover:before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
  &:after {
    content: "after";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }

  &:hover:after {
    left: 0;
    // transform: scale(0) rotateY(360deg);
    opacity: 1;
  }
`;
export const Button12 = styled(OriginalButton)`
  /* overflow: visible; */
  border: none;

  text-decoration: none;
  text-align: center;
  color: #000;
  transition: all 0.5s;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff0;
    transform: translateY(-50%);
    transition: all 0.3s;
    z-index: -1000;
  }
  &:before {
    left: 0;
    box-shadow: -100px 0 0 #ff0;
  }
  &:after {
    right: 0;
    box-shadow: 100px 0 0 #ff0;
  }

  &:hover:before {
    left: 50%;
    box-shadow: 30px 0 0 #ff0;
    /* transform: translate(-50%,-50%); */
    transform: translateX(-50%) translateY(-50%);
  }

  &:hover:after {
    right: 50%;
    box-shadow: -30px 0 0 #ff0;
    /* transform: translate(-50%,-50%); */
    transform: translateX(-50%) translateY(-50%);
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    transform: scale(0);
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover span {
    transform: scale(1);
    transition-delay: 0.4s;
  }
  &:hover {
    color: #262626;
  }
`;

export const Button13 = styled(OriginalButton)`
  transition: all 0.3s;

  &:hover {
    border: 2px solid #f44336;
    color: #f44336;
    animation: shake 0.3s linear infinite;
  }

  @keyframes shake {
    33% {
      transform: rotate(6deg);
    }
    66% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(6deg);
    }
  }
`;
export const Button14 = styled(OriginalButton)`
  letter-spacing: 2px;
  transition: all 0.3s;
  position: relative;
  border: none;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background: #20caff;
    z-index: -1;
    /* blending mode, just as in photoshop */
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: top;
  }
  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 100%;
    height: 100%;
    background: #ff7675;
    z-index: -1;
    transition: all 0.2s;
    transform-origin: bottom;
    mix-blend-mode: multiply;
  }
  /* change link color */
  &:hover {
    color: #272727;
  }

  &:hover:before {
    /* rotate in a 3d perspective */
    transform: perspective(1000px) rotateX(75deg);
    top: -6px;
    left: 0;
  }
  &:hover:after {
    /* rotate in a 3d perspective */
    transform: perspective(1000px) rotateX(-75deg);
    top: 6px;
    left: 0;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!1
export const Button15 = styled(OriginalButton)`
  color: #f6b93b;
  border: 3px solid #f6b93b;
  transition: all 0.5s;
  position: relative;

  &:before,
  &:after,
  span:before,
  span:after {
    content: "";
    position: absolute;
    /* because there are 4 elements sharing the full width */
    width: 25%;
    height: 100%;
    background: #f6b93b;
    z-index: -1;
    transition: all 0.5s;
  }
  &:before {
    top: 0;
    left: -25%;
  }
  /* changes to happen when we hover over the link */
  &:hover:before {
    top: 0;
    left: 0;
  }
  /* after element sits at the top */
  &:after {
    top: -100%;
    left: 25%;
  }
  &:hover:after {
    top: 0;
    left: 25%;
  }
  span:before {
    top: 100%;
    right: 25%;
  }
  &:hover span:before {
    top: 0;
    right: 25%;
  }
  span:after {
    top: 0;
    right: -25%;
  }
  &:hover span:after {
    right: 0;
  }
  /* change text color */
  &:hover {
    color: #222;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const Button16 = styled(OriginalButton)`
  color: orangered;
  border: 5px solid orangered;
  transition: all 0.2s;
  position: relative;

  &:before,
  &:after,
  span:before,
  span:after {
    content: "";
    position: absolute;
    /* because there are 4 elements sharing the full width */
    width: 25%;
    height: 100%;
    background: orangered;
    z-index: -1;
    transition: all 0.2s;
  }
  /* first part */
  &:before {
    content: "before";
    top: 100%;
    left: 0;
  }
  /* changes to happen when we hover over the link */
  &:hover:before {
    top: 0;
    left: 0;
  }
  /* second part */
  &:after {
    content: "after";
    top: -100%;
    left: 25%;
    transition-delay: 0.1s;
  }
  &:hover:after {
    top: 0;
    left: 25%;
  }
  /* third part */
  span:before {
    content: "span before";
    top: 100%;
    right: 25%;
    transition-delay: 0.2s;
  }
  &:hover span:before {
    top: 0;
    right: 25%;
  }
  /* fourth part */
  span:after {
    content: "span after";
    top: -100%;
    right: 0%;
    transition-delay: 0.3s;
  }
  &:hover span:after {
    right: 0;
    top: 0;
  }
  /* change text color */
  &:hover {
    color: #fff;
  }
`;
export const Button17 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  overflow: visible;
  font-size: 16px;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  padding: 0.875rem 1.5rem;
  border: 2px solid #000;

  a {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #000;
      z-index: -1;
      opacity: 0;
      transition: all 0.4s;
    }
    &:hover:before {
      opacity: 1;
      transform: rotate(15deg);
    }
    &:hover {
      color: #fff;
    }
  }

  span {
    color: transparent;
    position: relative;
  }
  span:before {
    content: "B";
    position: absolute;
    color: #000;
    opacity: 1;
    transition: all 0.2s;
  }
  &:hover span:before {
    color: #fff;
    font-size: 80px;
    transform: rotate(360deg) translate(-65%, -10%);
  }
`;
