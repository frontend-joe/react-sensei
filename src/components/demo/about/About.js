import React from "react";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  DocHeader,
  DocParagraph,
  DocSectionHeader,
  DocSectionSubheader,
  DocCode,
  DocCodeHeader,
} from "../shared";

const StyledWrapper = styled(PerfectScrollbar)`
  width: 100%;
  overflow: auto;
  height: 100%;
  padding: ${(p) => p.theme.lenMd3};
  background: ${(p) => p.theme.colorCardBackground};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    width: 40%;
    padding: ${(p) => p.theme.lenLg2};
  }
`;

const scInstall = `
  npm i react-sensei styled-components
`;

const scEnv = `
import { ThemeProvider } from "styled-components";
import { themeDark as theme } from "react-sensei";

const App = () => (
  <ThemeProvider theme={theme}>
    ...
  </ThemeProvider>
);

export default App;
`;

const senseiSetup = `
import { ThemeProvider } from "styled-components";
import { themeDark as theme, Card } from "components/library/themes";

const App = () => (
  <ThemeProvider theme={theme}>
    <Card isPrimary>I'm a card</Card>
  </ThemeProvider>
);

export default App;
`;

const uniconsSetup = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
    />
  </head>
</html>
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <DocHeader title="react-sensei" subtitle="2 minutes ago" />
      <DocSectionHeader>Intro</DocSectionHeader>
      <DocParagraph>
        Sensei is a UI component library built in React that aims to provide the
        cleanest set of dashboards in town.
      </DocParagraph>
      <DocSectionHeader>Installation</DocSectionHeader>
      <DocParagraph>
        Sensei relies on a specific development environment that can be easily
        set up in just a few minutes.
      </DocParagraph>

      <DocSectionSubheader>1. Install dependencies</DocSectionSubheader>
      <br />
      <DocCode noFixedHeight>{scInstall}</DocCode>

      <DocSectionSubheader>2. Setup theming</DocSectionSubheader>
      <DocParagraph>
        Styled components is a CSS pre-processer which makes theming via
        JavaScript insanely easy. You can find the official documentation{" "}
        <a href="https://styled-components.com/" target="_blank">
          here
        </a>
        .
      </DocParagraph>
      <DocCodeHeader>App.js</DocCodeHeader>
      <DocCode noFixedHeight>{scEnv}</DocCode>

      <DocSectionSubheader>3. Unicons</DocSectionSubheader>
      <DocParagraph>
        Unicons is a playfully elegant line icon pack made by the talented{" "}
        <a href="https://www.instagram.com/abdulldsgnr/" target="_blank">
          Muhammad Abdull
        </a>
        . You can explore it's official home{" "}
        <a href="https://iconscout.com/unicons/explore/line" target="_blank">
          here
        </a>
      </DocParagraph>
      <DocCodeHeader>index.html</DocCodeHeader>
      <DocCode>{uniconsSetup}</DocCode>
      <DocSectionSubheader>4. Go build a dashboard!</DocSectionSubheader>
      <DocParagraph>
        Use these components to make something special 😊
      </DocParagraph>
      <DocSectionHeader>Useful links</DocSectionHeader>
      <DocParagraph>
        All of the Sensei code is open-source and available on
        <br />
        <br />
        <a href="https://github.com/frontend-joe/react-sensei" target="_blank">
          github.com/frontend-joe/react-sensei
        </a>
        <br />
        <br />
        <a href="https://www.npmjs.com/package/react-sensei" target="_blank">
          npmjs.com/package/react-sensei
        </a>
      </DocParagraph>
      <DocSectionHeader>Support</DocSectionHeader>
      <DocParagraph>
        This project is built and maintained by{" "}
        <a href="https://www.instagram.com/frontendjoe/" target="_blank">
          @frontendjoe
        </a>
        . Send me a DM if you need any support 😊
      </DocParagraph>
    </StyledWrapper>
  );
};

export default Wrapper;
