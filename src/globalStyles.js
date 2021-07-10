import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    line-height: 1.0;

    /* set default font size i.e. 1rem to 62.5% of 16px=10px */
    font-size: 62.5%; 
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyles;
