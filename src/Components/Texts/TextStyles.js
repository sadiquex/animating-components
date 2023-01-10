import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  align-items: center;
  gap: 10px;
`;

export const OriginalText = styled.div`
  color: blue;
  font-size: 4rem;
  font-weight: bolder;
  cursor: pointer;
`;

export const Text1 = styled(OriginalText)`
  h1 {
    position: relative;
    text-transform: uppercase;
    color: #ccc;

    &:hover:before {
      width: 100%;
    }

    &:before {
      content: "text";
      top: 0;
      left: 0;
      position: absolute;
      color: #262626;
      width: 0;
      transition: all 1s;
      overflow: hidden;
    }
  }
`;

export const Text2 = styled(OriginalText)`
  h1 {
    white-space: nowrap;
    // letter-spacing: 15px;
    // text-shadow: 0 1px 0 #efefef,0 2px 0 #efefef,0 3px 0 #efefef,0 4px 0 #efefef,0 30px 5px rgba(0,0,0,.1),
    text-shadow: 0 1px 0 #efefef, 0 30px 5px rgba(0, 0, 0, 0.1);

    animation: float 3s linear infinite;
    animation-direction: alternate;

    &:hover {
      animation: float 3s linear infinite;
      animation-direction: alternate;
    }
  }

  @keyframes float {
    from {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(-5deg);
    }
  }
`;
export const Text3 = styled.div`
  background: #272727;
  padding: 10px 30px;
  color: #484848;
  cursor: pointer;
  &:hover {
    animation: lightning 0.3s infinite;
  }
  ul {
    /* border: 2px solid red; */
    display: flex;
    font-size: 3rem;
  }
  li {
    animation: lightning 1.4s infinite;
  }
  @keyframes lightning {
    0% {
      color: #484848;
      text-shadow: none;
    }
    90% {
      color: #484848;
      text-shadow: none;
    }
    100% {
      color: #ff0;
      text-shadow: 0 0 7px #fff900, 0 00 50px #ff6c00;
    }
  }

  /* animating each letter separately */
  li:nth-child(1) {
    animation-delay: 0.1s;
  }
  li:nth-child(2) {
    animation-delay: 0.2s;
  }
  li:nth-child(3) {
    animation-delay: 0.3s;
  }
  li:nth-child(4) {
    animation-delay: 0.4s;
  }
  li:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

export const Text4 = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    color: #000;
    transition: all 2s;
    letter-spacing: 10px;
    font-size: 50px;
    font-weight: bolder;
  }
  ul:hover li {
    transform: rotate(45deg) translateY(-200px);
    opacity: 0;
    /* smoke effect */
    filter: blur(20px);
  }
  li:nth-child(1) {
    transition-delay: 0s;
  }
  li:nth-child(2) {
    transition-delay: 0.4s;
  }
  li:nth-child(3) {
    transition-delay: 0.8s;
  }
  li:nth-child(4) {
    transition-delay: 1.2s;
  }
  li:nth-child(5) {
    transition-delay: 1.6s;
  }
`;
export const Text5 = styled.div`
  font-size: 80px;
  text-align: center;
  background: url("https://static.vecteezy.com/system/resources/previews/001/255/901/original/blue-wave-pattern-vector.jpg");
  -webkit-background-clip: text;
  color: transparent;
  animation: textBackground 15s infinite;

  @keyframes textBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 100%;
    }
  }
`;
