import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "react-router-dom";

import { Overlay } from "components/library";

import routes from "components/routes";

import AppRoute from "./AppRoute";
import Navbar from "./navbar/Navbar";
import Global from "./styles/Global";
import Bootstrap from "./styles/Bootstrap";
import SettingsToggle from "./settings/SettingsToggle";
import SettingsDialog from "./settings/SettingsDialog";
import About from "./about/About";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    flex-direction: row;
  }
`;

const Wrapper = ({ setTheme, isDarkTheme }) => {
  const [isDocsOpen, setDocsOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const isOverlayVisible = isDocsOpen || isSettingsOpen;

  const handleOverlayClicked = () => {
    setDocsOpen(false);
    setSettingsOpen(false);
  };
  return (
    <StyledWrapper>
      <Overlay
        zIndex={5}
        onClick={handleOverlayClicked}
        isVisible={isOverlayVisible}
      />
      <Global />
      <Bootstrap />
      <Navbar />
      <SettingsToggle onClick={() => setSettingsOpen(true)} />
      <SettingsDialog
        setTheme={setTheme}
        isDarkTheme={isDarkTheme}
        isSettingsOpen={isSettingsOpen}
        setSettingsOpen={setSettingsOpen}
      />
      <Switch>
        <AppRoute
          exact
          path="/"
          component={About}
          hideDocs
          setDocsOpen={setDocsOpen}
          isDocsOpen={isDocsOpen}
        />
        {routes.map((route) => (
          <AppRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.example}
            docs={route.docs}
            setDocsOpen={setDocsOpen}
            isDocsOpen={isDocsOpen}
            isDashboard={route.isDashboard}
          />
        ))}
        <AppRoute
          component={About}
          hideDocs
          setDocsOpen={setDocsOpen}
          isDocsOpen={isDocsOpen}
        />
      </Switch>
    </StyledWrapper>
  );
};

export default Wrapper;
