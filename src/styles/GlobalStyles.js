import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  } 

  h1 {
    font-size: 50px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 500;
  }

  h2 {
    font-size: 42px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 500;
  }

  h3 {
    font-size: 34px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 600;
  }

  h4 {
    font-size: 28px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
  }

  h5 {
    font-size: 22px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
  }

  p{
    font-size: 18px;
    font-family: "JetBrains Mono", monospace;
    font-weight: 400;
  }

  
`;

export default GlobalStyles;
