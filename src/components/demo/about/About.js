import React from "react";
import styled from "styled-components";
import {
  DocHeader,
  DocParagraph,
  DocSectionHeader,
  DocSectionSubheader,
  DocCode,
  DocCodeHeader,
} from "../shared";

const StyledWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  padding: ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenMd3}
    ${(p) => p.theme.lenXl1};
  background: ${(p) => p.theme.colorCardBackground};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    width: 40%;
    padding: ${(p) => p.theme.lenLg2};
  }
`;

const scInstall = `
  npm i react-sensei
`;

const senseiSetup = `
import {
  SenseiProvider,
  themeDark as theme,
} from "react-sensei";

const App = () => (
  <SenseiProvider theme={theme}>
    ...
  </SenseiProvider>
);

export default App;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <DocHeader title="react-sensei" subtitle="2 minutes ago" />
      <DocSectionHeader>Intro</DocSectionHeader>
      <DocParagraph>
        Sensei is a UI component library built for frontend React developers.
        The primary focus is to make clean responsive dashboards... fast!
      </DocParagraph>
      <DocSectionHeader>Installation</DocSectionHeader>

      <DocSectionSubheader>1. Install react-sensei</DocSectionSubheader>
      <br />
      <DocCode noFixedHeight={1}>{scInstall}</DocCode>

      <DocSectionSubheader>2. SenseiProvider and theme</DocSectionSubheader>
      <DocParagraph>
        Sensei relies on your entire app being wrapped inside a SenseiProvider
        component with a single theme prop.
      </DocParagraph>
      <DocCode noFixedHeight={1}>{senseiSetup}</DocCode>
      <DocParagraph>
        The theme can be set statically, or toggled dynamically via a state
        variable. You can find the{" "}
        <a
          href="https://github.com/frontend-joe/react-sensei/tree/master/src/components/library/themes"
          target="_blank"
        >
          full list of themes here
        </a>
      </DocParagraph>
      <DocSectionSubheader>3. Go build a dashboard!</DocSectionSubheader>
      <DocParagraph>Follow the docs to compose dashboards 🚀</DocParagraph>
      <DocSectionHeader>Icons used</DocSectionHeader>
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
        <br />
        <br />
        <a href="https://frontendjoe.com" target="_blank">
          frontendjoe.com
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
