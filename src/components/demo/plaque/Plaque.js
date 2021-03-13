import React from "react";
import styled from "styled-components";
import { SenseiIcon, SenseiSquare } from "components/library";
import { Link } from "react-router-dom";

const StyledWrapper = styled(Link)`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: ${(p) => p.theme.lenSm2};
  width: ${(p) => p.theme.lenXl2};
  height: ${(p) => p.theme.lenXl2};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: none;
  }
`;

const StyledSenseiSquare = styled(SenseiSquare)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const StyledSenseiIcon = styled(SenseiIcon)`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-top: -3px;
  transform: translate(-50%, -50%);
  width: 48px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper to="/">
      <StyledSenseiSquare />
      <StyledSenseiIcon />
    </StyledWrapper>
  );
};

export default Wrapper;
