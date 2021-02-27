import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "react-router-dom";
import { Frame, Bottom, Middle, Top } from "./shared";

import { Overlay } from "components/library";

import routes from "components/routes";

import AppRoute from "./AppRoute";

const Example = ({ setTheme, isDarkTheme }) => {
  const [isDocsOpen, setDocsOpen] = useState(false);

  return (
    <Frame>
      <Top
        setDocsOpen={setDocsOpen}
        setTheme={setTheme}
        isDarkTheme={isDarkTheme}
      />
      <Middle>
        <Overlay
          onClick={() => setDocsOpen(false)}
          position="absolute"
          zIndex={4}
          isVisible={isDocsOpen}
        />
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              exact={route.exact}
              path={route.path}
              example={route.example}
              docs={route.docs}
              setDocsOpen={setDocsOpen}
              isDocsOpen={isDocsOpen}
            />
          ))}
        </Switch>
      </Middle>
      <Bottom isDarkTheme={isDarkTheme} />
    </Frame>
  );
};

export default Example;
