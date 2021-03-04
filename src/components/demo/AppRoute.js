import React, { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Docs from "./docs/Docs";
import DocsToggle from "./docs/DocsToggle";
import Example from "./example/Example";

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
      {!hideDocs && (
        <Example isDashboard={isDashboard}>
          {React.createElement(component)}
        </Example>
      )}

      {hideDocs && React.createElement(component)}

      {!hideDocs && !isDashboard ? (
        <>
          <DocsToggle onClick={() => setDocsOpen(true)} />
          <Docs docs={docs} setDocsOpen={setDocsOpen} isDocsOpen={isDocsOpen} />
        </>
      ) : null}
    </Route>
  );
};

export default AppRoute;
