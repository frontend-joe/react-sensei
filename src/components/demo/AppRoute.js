import React, { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Docs from "./docs/Docs";
import DocsToggle from "./docs/DocsToggle";
import Example from "./example/Example";

const StyledExampleWrapper = styled.div`
  overflow: auto;
  flex: 0 1 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(p) => p.theme.screenWidthXl}) {
    flex-direction: ${(p) => (p.isDashboard ? "column" : "row")};
  }
`;

const AppRoute = ({
  path,
  exact,
  component,
  docs,
  setDocsOpen,
  isDocsOpen,
  isDashboard,
  hideDocs,
}) => {
  return (
    <Route exact={exact} path={path}>
      <StyledExampleWrapper isDashboard={isDashboard}>
        {!hideDocs && (
          <Example isDashboard={isDashboard}>
            {React.createElement(component)}
          </Example>
        )}

        {hideDocs && React.createElement(component)}

        {!hideDocs && !isDashboard ? (
          <>
            <DocsToggle onClick={() => setDocsOpen(true)} />
            <Docs
              docs={docs}
              setDocsOpen={setDocsOpen}
              isDocsOpen={isDocsOpen}
            />
          </>
        ) : null}
      </StyledExampleWrapper>
    </Route>
  );
};

export default AppRoute;
