import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { SenseiProvider, themeDark } from "components/library";

import Demo from "components/demo/Wrapper";

export default () => {
  const [theme, setTheme] = useState({});

  const handleThemeSet = (activeTheme) => {
    console.log("handleThemeSet", activeTheme);

    localStorage.setItem("sensei-theme", activeTheme.id);
    setTheme({
      ...activeTheme,
    });
  };

  const handleFontSet = (activeFont) => {
    localStorage.setItem("sensei-font", activeFont);
    setTheme({
      ...theme,
      fontFamily: activeFont,
    });
  };

  return (
    <SenseiProvider
      theme={theme}
      localStorageTheme={localStorage.getItem("sensei-theme")}
      localStorageFont={localStorage.getItem("sensei-font")}
      setTheme={handleThemeSet}
      preloaderClassName="theme-loading"
    >
      <Router>
        <Demo setTheme={handleThemeSet} setFont={handleFontSet} />
      </Router>
    </SenseiProvider>
  );
};
