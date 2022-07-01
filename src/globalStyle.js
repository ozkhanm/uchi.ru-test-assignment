import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: sans-serif; 
    overflow: hidden;
  }

  @media screen and (min-width: 740px) {
    body {
      max-width: 740px;
      margin: 0 auto;
    }
  }

  #root {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
`;