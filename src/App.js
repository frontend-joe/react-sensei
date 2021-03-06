import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { themeDark, themeLight } from "components/library";

import Demo from "components/demo/Wrapper";

export default () => {
  const [theme, setTheme] = useState(themeDark);

  const [isDarkTheme, setDarkTheme] = useState(true);

  const handleThemeSet = (selectedTheme) => {
    if (selectedTheme) {
      setTheme(selectedTheme);
    } else {
      if (isDarkTheme) {
        setTheme(themeLight);
      } else {
        setTheme(themeDark);
      }
    }

    setDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Demo setTheme={handleThemeSet} isDarkTheme={isDarkTheme} />
      </Router>
    </ThemeProvider>
  );
};
