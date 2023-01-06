import styled from "styled-components";

export const Container = styled.div`
  // width: 100vw;
  // height: 100vh;
  gap: 10px;
  margin: 0 auto;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.6rem;
  border: 2px solid red;
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
  cursor: pointer;

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
  transition: all .5s;
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
  transition: all .5s;
}

&:hover:after {
  left: 0;
  // transform: scale(0) rotateY(360deg);
  opacity: 1;
  
}

`
export const Button12 = styled(OriginalButton)`
overflow: visible;


  text-decoration: none;
  text-align:center;
  color: #000;
  transition: all .5s;
  position:relative;

  &:before,&:after {
    content: "";
    position: absolute;
    top: 50%;
    width:20px;
    height:20px;
    border-radius: 50%;
    background: #ff0;
    transform: translateY(-50%);
    transition: all .3s;
  }
  &:before {
    left: 0;
    box-shadow: -100px 0 0 green;
  }
  &:after {
    right: 0;
    box-shadow: 100px 0 0 blue;

  }

  &:hover:before {
    left:50%;
    box-shadow: 30px 0 0 green;
  }

  &:hover:after {
    right:50%;
    box-shadow: -30px 0 0 blue;
  }
`