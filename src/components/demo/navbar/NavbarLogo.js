import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Link } from "react-router-dom";
import { createImageCdnLink } from "../utils";
import { SenseiLogo } from "components/library";

const StyledWrapper = styled.div`
  display: none;
  position: relative;
  z-index: 2;
  flex: 0 1 auto;

  padding: 0 ${(p) => p.theme.lenMd1} 0;
  background: ${(p) => p.theme.colorPrimary};
  box-shadow: 0 0 10px ${rgba("black", 0.2)};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    padding: ${(p) => p.theme.lenMd3};
    justify-content: center;
    margin-bottom: 0;
    box-shadow: none;
    background: transparent;
  }
`;

const StyledBackground = styled.div`
  display: none;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: ${(p) => p.theme.lenLg3};
  background: ${(p) => p.theme.colorPrimary};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    height: ${(p) => p.theme.lenXl1};
  }

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    height: ${(p) => p.theme.lenXl3};
    display: block;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const StyledSvgBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colorBackground};
  position: relative;
  z-index: 1;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadowLogo};
  width: ${(p) => p.theme.lenLg2};
  height: ${(p) => p.theme.lenLg2};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    width: 100%;
    height: auto;
    min-height: 172px;
  }
`;

export default () => {
  return (
    <StyledWrapper>
      <StyledBackground />
      <StyledLink to="/">
        <StyledSvgBackground>
          <SenseiLogo />
        </StyledSvgBackground>
      </StyledLink>
    </StyledWrapper>
  );
};
