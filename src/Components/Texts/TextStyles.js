import styled from "styled-components";

export const OriginalText = styled.div`
  color: blue;
  font-size: 4rem;
  font-weight: bolder;
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
  // letter-spacing: 15px;
  // text-shadow: 0 1px 0 #efefef,0 2px 0 #efefef,0 3px 0 #efefef,0 4px 0 #efefef,0 30px 5px rgba(0,0,0,.1),
  text-shadow:0 1px 0 #efefef,0 30px 5px rgba(0,0,0,.1);

  animation: float 3s linear infinite;
  animation-direction: alternate;
  
}

@keyframes float {
  from {transform: rotate(5deg)}
  to {transform: rotate(-5deg)}
}

`