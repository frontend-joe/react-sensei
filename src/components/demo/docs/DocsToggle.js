import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.button`
  flex: 0 0 ${(p) => p.theme.lenXl1};
  padding: 0 ${(p) => p.theme.lenMd1};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: none;
  }
`;

const StyledButton = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.lenLg1};
  padding: 0 ${(p) => p.theme.lenMd3};
  height: ${(p) => p.theme.lenLg2};
  background: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorPrimaryText};

  @media (min-width: ${(p) => p.theme.screenWidthSm}) {
    width: 55%;
  }
`;

const Wrapper = ({ onClick }) => {
  const location = useLocation();

  return !location?.pathname?.includes("dashboard") ? (
    <StyledWrapper onClick={onClick}>
      <StyledButton>View docs</StyledButton>
    </StyledWrapper>
  ) : null;
};

export default Wrapper;
