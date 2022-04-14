import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all .3s ease;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    -webkit-text-size-adjust: 100%;
    &.using-mouse {
      * {
        &:focus {
          outline: none !important;
        }
      }
    }
  }

  a {
    line-height: 1.44;
    text-decoration: none;
  }

  ul {
      list-style-type: none;
  }

  .wrapper {
    max-width: 1600px;
    width: 80%;
    margin: 100px auto ;
  }

`;

export default GlobalStyle;
