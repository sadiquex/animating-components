import Elements from "./Elements";
import Navbar from "./Components/Navbar/Navbar";
import { createElement as $ } from "react";
import styled from "styled-components";

function App() {
  return $(Container, { className: "App" }, $(Navbar), $(Elements));
}

export default App;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
