import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    font-family: ${(p) => p.theme.fontFamily};
  }

  body {
    background: ${(p) => p.theme.colorBackground};
    color: ${(p) => p.theme.colorText};
  }
`;

export default Global;
