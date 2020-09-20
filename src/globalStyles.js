import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts[0]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.whiteSmoke};
    min-width: 320px;
    height: calc(100vh - ${({ theme }) => theme.space[8]});
  }

  h1 {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export { GlobalStyles };
