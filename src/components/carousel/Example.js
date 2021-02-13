import React from "react";
import { Switch, Route } from "react-router-dom";
import { Frame, Bottom, Middle, Top } from "./shared";

import CleanButton from "components/reactzilla/buttons/cleanButton/Example";
import SimpleCard from "components/reactzilla/cards/simpleCard/Example";

const Example = ({ setTheme, isDarkTheme }) => {
  return (
    <Frame>
      <Top setTheme={setTheme} isDarkTheme={isDarkTheme} />
      <Middle>
        <Switch>
          <Route exact path="/">
            <CleanButton />
          </Route>
          <Route path="/cards/simple-card">
            <SimpleCard />
          </Route>
        </Switch>
      </Middle>
      <Bottom isDarkTheme={isDarkTheme} />
    </Frame>
  );
};

export default Example;
