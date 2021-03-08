import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useStyledTheme } from "./hooks";
import { ThemeProvider, createGlobalStyle } from "styled-components";

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

const Wrapper = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Global />
        {theme && (
          <Helmet>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
            />
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${theme.fontFamily}:wght@${theme.fontWeightRegular};${theme.fontWeightSemibold};${theme.fontWeightBold}&display=swap`}
            />
          </Helmet>
        )}

        {children}
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Wrapper;
