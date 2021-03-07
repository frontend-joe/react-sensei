import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    font-family: ${(p) =>
      p.theme
        .fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
  }

  body {
    background: ${(p) => p.theme.colorBackground};
    color: ${(p) => p.theme.colorText};
  }
`;

export default Global;
