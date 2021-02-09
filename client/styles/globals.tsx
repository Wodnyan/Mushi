import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Lato Typeface 400 700 */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #__next {
    height: 100%;
    font-family: "Lato", sans-serif;
  }
`;
