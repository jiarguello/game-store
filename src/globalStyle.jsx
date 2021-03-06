import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html body #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 14px;
    font-family: sans-serif;
  }
`;