import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { themeDefault, themeDark, themeLight } from "themes";

import Example from "components/carousel/Example";
import Sidebar from "components/sidebar/Sidebar";

export default () => {
  const [theme, setTheme] = useState({ ...themeDefault, ...themeLight });

  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleThemeSet = () => {
    if (isDarkTheme) {
      setTheme({ ...themeDefault, ...themeLight });
    } else {
      setTheme({ ...themeDefault, ...themeDark });
    }

    setDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <Example setTheme={handleThemeSet} isDarkTheme={isDarkTheme} />
      </Router>
    </ThemeProvider>
  );
};
