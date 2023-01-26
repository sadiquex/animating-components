import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  /* padding: 2rem 0.5rem; */
  padding: 2rem 0rem;
  /* overflow-x: scroll; */
  /* border: 2px solid red; */
  /* overflow-x: hidden; */
`;

export const Heading = styled.p`
  text-align: left;
  font-weight: 600;
  font-size: 24px;
`;
export const Description = styled.p`
  /* width: 100%; */
  text-align: left;
  /* white-space: nowrap; */
`;
