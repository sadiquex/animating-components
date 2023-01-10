import { createElement as $ } from "react";
import Elements from "./Elements";
// import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reports from "./Components/Reports";

function App() {
  return $(
    Container,
    { className: "App" },
    // $(Navbar),
    $(
      Router,
      null,
      $(Sidebar),
      // switch is the Routes
      $(
        Routes,
        null,
        $(Route, { path: "/home", element: $(Home), exact: true }),
        $(Route, { path: "/reports", element: $(Reports), exact: true })
      )
    ),
    $(Elements)
  );
}

export default App;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
