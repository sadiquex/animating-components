import styled from "styled-components";

export const OriginalText = styled.p`
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
