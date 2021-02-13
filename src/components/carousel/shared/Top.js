import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 28px;
`;

const StyledUrl = styled.div`
  font-weight: 500;
  color: ${(p) => p.theme.colorLabel};
`;

const switchDarkColor = "#272d2f";

const transition = "0.35s";

const switchOn = css`
  background: ${switchDarkColor};
`;

const StyledSwitchWrapper = styled.div`
  width: 60px;
  height: 32px;
  padding: 4px;
  border-radius: 16px;
  background: ${(p) => p.theme.colorPrimary};
  transition: background ${transition};
  cursor: pointer;

  ${(p) => p.isOn && switchOn};
`;

const knobOn = css`
  transform: translateX(27px);
`;

const StyledSwitchKnob = styled.div`
  position: relative;
  overflow: hidden;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;

  transition-property: background, transform;
  transition-duration: ${transition};

  ${(p) => p.isOn && knobOn};
`;

const Top = ({ isDarkTheme, setTheme }) => {
  return (
    <StyledWrapper>
      <StyledUrl>github.com/vuezy/cleanzilla</StyledUrl>
      <StyledSwitchWrapper onClick={setTheme} isOn={isDarkTheme}>
        <StyledSwitchKnob isOn={isDarkTheme} />
      </StyledSwitchWrapper>
    </StyledWrapper>
  );
};

export default Top;
