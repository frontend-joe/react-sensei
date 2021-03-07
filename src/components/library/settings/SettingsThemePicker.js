import React from "react";
import styled, { css } from "styled-components";
import { v4 as uidv4 } from "uuid";
import {
  themeLight,
  themeDark,
  themeWhite,
  themeWhiteGreen,
  themeDarkRed,
  themeDarkGold,
  useStyledTheme,
} from "../";

const circleSize = "2rem";

const StyledThemesWrapper = styled.div`
  display: flex;
`;

const StyledTheme = styled.button`
  position: relative;
  flex: 0 0 ${circleSize};
  display: flex;
  width: ${circleSize};
  height ${circleSize};
  margin-right: ${(p) => p.theme.lenSm3};
`;

const sharedThemeStyles = css`
  width: 50%;
  height: ${circleSize};
`;

const StyledThemePrimary = styled.span`
  ${sharedThemeStyles};
  border-top-left-radius: ${circleSize};
  border-bottom-left-radius: ${circleSize};
  background: ${(p) => p.background};
`;

const StyledThemeAccent = styled.span`
  ${sharedThemeStyles};
  border-top-right-radius: ${circleSize};
  border-bottom-right-radius: ${circleSize};
  background: ${(p) => p.background};
`;

const StyledBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.lenMd2};
  height: ${(p) => p.theme.lenMd2};
  border-radius: 50%;
  background: #39cc52;
  border: 3px solid ${(p) => p.theme.colorCardBackground};
  color: white;
  font-size: 10px;
`;

const themes = [
  themeDark,
  themeLight,
  themeWhite,
  themeDarkRed,
  themeDarkGold,
  themeWhiteGreen,
];

const Wrapper = ({ extraThemes, setTheme }) => {
  const theme = useStyledTheme();

  if (extraThemes) {
    themes.concact(extraThemes);
  }

  return (
    <StyledThemesWrapper>
      {themes.map((t) => (
        <StyledTheme key={uidv4()} onClick={() => setTheme(t)}>
          {t.id === theme.id && (
            <StyledBadge>
              <i class="uil uil-check"></i>
            </StyledBadge>
          )}

          <StyledThemePrimary background={t.colorBackground} />
          <StyledThemeAccent background={t.colorPrimary} />
        </StyledTheme>
      ))}
    </StyledThemesWrapper>
  );
};

export default Wrapper;
