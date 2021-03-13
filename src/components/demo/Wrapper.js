import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "react-router-dom";

import { Overlay, SettingsToggle } from "components/library";

import routes from "components/routes";

import AppRoute from "./AppRoute";
import Navbar from "./navbar/Navbar";
import Bootstrap from "./styles/Bootstrap";
import About from "./about/About";
import Settings from "./settings/Settings";
import Plaque from "./plaque/Plaque";

import { isDev } from "components/demo/utils";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    flex-direction: row;
  }
`;

const Wrapper = ({ setTheme, setFont, isDarkTheme }) => {
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
      <Bootstrap />
      <Navbar />
      <Plaque />
      <SettingsToggle onClick={() => setSettingsOpen(true)} />
      <Settings
        isSettingsOpen={isSettingsOpen}
        setSettingsOpen={setSettingsOpen}
        setTheme={setTheme}
        setFont={setFont}
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
        {routes
          .filter((obj) => !obj.isDev || isDev)
          .map((route) => (
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
