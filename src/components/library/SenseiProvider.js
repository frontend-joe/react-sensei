import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useStyledTheme } from "./hooks";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  themeLightPurple,
  themeDark,
  themeWhite,
  themeWhiteGreen,
  themeDarkRed,
  themeDarkGold,
  themeDarkRoseGold,
  themeDarkOrange,
  themeLightClaret,
  themeLightBlue,
  themeDarkPurpleGreen,
} from "./";

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

const Wrapper = ({
  children,
  setTheme,
  setFont,
  theme,
  localStorageTheme,
  localStorageFont,
  preloaderClassName,
  onLoadBegin = () => null,
}) => {
  onLoadBegin();

  const themes = [
    themeLightPurple,
    themeDark,
    themeWhite,
    themeWhiteGreen,
    themeDarkRed,
    themeDarkGold,
    themeDarkRoseGold,
    themeDarkOrange,
    themeLightClaret,
    themeLightBlue,
    themeDarkPurpleGreen,
  ];

  useEffect(() => {
    if (localStorageTheme) {
      const savedTheme =
        themes.find((obj) => obj.id === localStorageTheme) || themeDark;
      setTheme({
        ...savedTheme,
        fontFamily: localStorageFont ? localStorageFont : themeDark.fontFamily,
      });
    } else {
      if (!theme.id) {
        setTheme({
          ...themeDark,
          fontFamily: localStorageFont
            ? localStorageFont
            : themeDark.fontFamily,
        });
      }
    }
  }, [localStorageTheme, localStorageFont]);

  useEffect(() => {
    const removeIconLoading = () =>
      document.getElementById("preloader").classList.remove("icon-loading");

    const removeFontLoading = () =>
      document.getElementById("preloader").classList.remove("font-loading");

    if (theme.id) {
      document.getElementById("preloader").classList.remove("theme-loading");
    }

    document
      .getElementById("font-script")
      .addEventListener("load", removeFontLoading);
    document
      .getElementById("icon-script")
      .addEventListener("load", removeIconLoading);

    setTimeout(() => {
      removeIconLoading();
      removeFontLoading();
      document.getElementById("preloader").classList.remove("theme-loading");
    }, 500);

    return () => {
      document
        .getElementById("icon-script")
        .removeEventListener("load", removeIconLoading);
      document
        .getElementById("font-script")
        .removeEventListener("load", removeFontLoading);
    };
  }, [theme.id]);

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Global />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            id="icon-script"
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
          />
          <link
            id="font-script"
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=${theme.fontFamily}:wght@${theme.fontWeightRegular};${theme.fontWeightSemibold};${theme.fontWeightBold}&display=swap`}
          />

          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
          />
        </Helmet>
        {children}
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Wrapper;
