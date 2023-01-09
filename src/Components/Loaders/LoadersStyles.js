import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid red;
  background: #264653;
  gap: 100px;
  padding: 40px;
`;

export const Loader1 = styled.div`
  width: 400px;
  height: 200px;
  background: #262626;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;

  ul {
    display: flex;
    border-bottom: 10px solid #fff;
  }
  li {
    list-style: none;
    width: 30px;
    height: 30px;
    background: #fff;
    margin: 0 10px;
    border-radius: 50%;
    animation: jumping 0.8s linear infinite;
  }

  @keyframes jumping {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(0);
    }
  }

  // animating each child element to start at a different time
  ul li:nth-child(1) {
    animation-delay: 0.45s;
  }
  ul li:nth-child(2) {
    animation-delay: 0.6s;
  }
  ul li:nth-child(3) {
    animation-delay: 0.3s;
  }
  ul li:nth-child(4) {
    animation-delay: 0s;
  }
  ul li:nth-child(5) {
    animation-delay: 0.15s;
  }
`;
export const Loader2 = styled.div`
  .line {
    width: 300px;
    border-bottom: 4px solid #fff;
    position: relative;
    animation: animateLine 2s linear infinite;
  }
  .hexagon {
    position: absolute;
    left: 0;
    bottom: 14px;
    width: 50px;
    height: 30px;
    background: #fff;
    animation: animateHexagon 2s linear infinite;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform: rotate(60deg);
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform: rotate(-60deg);
    }
  }

  @keyframes animateHexagon {
    0% {
      left: 0;
    }
    /* to prevent it from going beyond the line, we subtract 100% from the total width */
    50% {
      left: calc(100% - 50px);
      // we want the hexagon to rotate using cycles, 1 cycle is 360d egrees
      transform: rotate(720deg);
    }
    100% {
      left: 0;
    }
  }

  @keyframes animateLine {
    0% {
      transform: rotate(30deg);
    }
    25% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(30deg);
    }
  }
`;

export const Loader3 = styled.div`
  .loader {
    width: 200px;
    height: 200px;
    position: relative;
  }
  .outer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-left: 5px solid #eb4d4b;
    border-right: 5px solid #eb4d4b;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-radius: 50%;

    animation: rotate 1s linear infinite;
  }
  .middle {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;

    border-left: 5px solid #218c74;
    border-right: 5px solid #218c74;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-radius: 50%;

    animation: rotating 1s linear infinite reverse;
  }

  .inner {
    position: absolute;
    top: 60px;
    left: 60px;
    right: 60px;
    bottom: 60px;

    border-left: 5px solid #ccae62;
    border-right: 5px solid #ccae62;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50%;

    animation: rotating 1s linear infinite;
  }

  .dot {
    position: absolute;
    top: 90px;
    left: 90px;
    right: 90px;
    bottom: 90px;
    background: #fff;
    border-radius: 50%;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* reverse */
  @keyframes reverserotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
export const Loader4 = styled.div`
  perspective: 200px;
  .loading {
    background: #fff;
    border-radius: 12px;
    width: 100px;
    height: 100px;
    animation: flipRotation 2s infinite;
  }

  @keyframes flipRotation {
    0% {
      transform: rotateY(0deg) rotateX(0deg);
    }
    50% {
      transform: rotateY(180deg) rotateX(0deg);
    }
    100% {
      transform: rotateY(0) rotateX(180deg);
    }
  }
`;
// !!!!!!!!!!!!!!!!!!!!!
// newton cradle
export const Loader5 = styled.div`
  .cradle {
    display: flex;
    /* column-gap: 30px; */
    border-top: 10px solid #fff;
  }

  .cradle span {
    display: block;
    width: 3px;
    height: 300px;
    background: #fff;
    margin: 0 29px;
    position: relative;
    transform-origin: top;

    /* use circles as the before element of the span */
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  }
  /* left arm */
  .cradle span:nth-child(1) {
    animation: leftArm 2s ease-in infinite;
  }
  /* right arm */
  /* wait 1s before starting */
  .cradle span:nth-child(5) {
    animation: rightArm 2s ease-in infinite 1s;
  }
  @keyframes leftArm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  /* wait for left arm to finish before starting */
  @keyframes rightArm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-60deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
// width and height of the before elements become 0 over an animation duration of 1s;
export const Loader6 = styled.div`
  .loader {
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  span {
    width: 30px;
    height: 30px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      animation: loading 1s linear infinite;
    }
  }

  /* without these, everything animates at the same time */
  .s4::before,
  .s5::before,
  .s6::before {
    animation-delay: 0.1s;
  }
  .s7::before,
  .s8::before,
  .s9::before {
    animation-delay: 0.2s;
  }

  @keyframes loading {
    0% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`;
export const Loader7 = styled.div`
  .loading {
    width: 300px;
    height: 3px;
    background: #fff;
    animation: line 1.5s infinite alternate;
  }

  @keyframes line {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    45% {
      transform: scalex(1);
      transform-origin: left;
    }
    50% {
      transform: scaleX(1);
      transform-origin: right;
    }
    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }
`;
export const Loader8 = styled.div`
  h1 {
    font-size: 40px;
    letter-spacing: 10px;
    color: #fff;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #f6b93b;
      border-right: 2px solid #f6b93b;
      animation: animate 5s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;
