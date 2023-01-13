import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid red;
  gap: 20px;
  flex: 1;
`;

export const Heading = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  flex: 1;
  width: 100%;
`;
export const Description = styled.p`
  color: blue;
  flex: 1;
  width: 100%;
`;
