import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Docs } from "./shared";

const AppRoute = ({ path, exact, example, docs, setDocsOpen, isDocsOpen }) => {
  return (
    <Route exact={exact} path="/">
      {React.createElement(example)}
      <Docs docs={docs} setDocsOpen={setDocsOpen} isDocsOpen={isDocsOpen} />
    </Route>
  );
};

export default AppRoute;
