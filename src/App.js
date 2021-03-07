import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { themeDark, themeLight } from "components/library";

import Demo from "components/demo/Wrapper";

export default () => {
  const [theme, setTheme] = useState(themeDark);

  const [isDarkTheme, setDarkTheme] = useState(true);

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
    <ThemeProvider theme={theme}>
      <Router>
        <Demo
          setTheme={handleThemeSet}
          setFont={handleFontSet}
          isDarkTheme={isDarkTheme}
        />
      </Router>
    </ThemeProvider>
  );
};
