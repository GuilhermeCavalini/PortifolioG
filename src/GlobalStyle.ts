import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --cor-primaria: rgba(118, 42, 190, 0.848);
    --cor-secundaria:rgb(6, 0, 28);
    --font-Roboto: "Roboto", serif;
    --font-Bitter: "Bitter", serif;
    --font-Crimson: "Crimson Text", serif;
  }


  body {
    font-family: var(--font-Roboto);
  }
`;