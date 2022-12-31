import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.6rem;
`;
export const OriginalButton = styled.a`
  padding: 3rem 8rem;
  cursor: pointer;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.6s;
  overflow: hidden;
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
