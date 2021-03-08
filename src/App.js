import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { SenseiProvider, themeDark } from "components/library";

import Demo from "components/demo/Wrapper";

export default () => {
  const [theme, setTheme] = useState(themeDark);

  const handleThemeSet = (activeTheme) => {
    setTheme({
      ...activeTheme,
      fontFamily: theme.fontFamily,
    });
  };

  const handleFontSet = (activeFont) => {
    setTheme({
      ...theme,
      fontFamily: activeFont.name,
      fontWeightRegular: activeFont.fontWeightRegular,
      fontWeightSemibold: activeFont.fontWeightSemibold,
      fontWeightBold: activeFont.fontWeightBold,
    });
  };

  return (
    <SenseiProvider theme={theme}>
      <Router>
        <Demo setTheme={handleThemeSet} setFont={handleFontSet} />
      </Router>
    </SenseiProvider>
  );
};
