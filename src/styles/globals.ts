"use client";
import { createGlobalStyle } from "styled-components";
import "./tailwinds.css";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary}
  }
`;

export default GlobalStyles;
