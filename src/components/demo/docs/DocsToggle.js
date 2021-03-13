import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Unicon } from "components/library";

const StyledWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  flex: 0 0 ${(p) => p.theme.lenXl1};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;

  @media (min-width: ${(p) => p.theme.screenWidthXl}) {
    display: none;
  }
`;

const StyledButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.lenLg1};
  padding: 0 ${(p) => p.theme.lenMd3};
  height: ${(p) => p.theme.lenLg3};
  background: transparent;
  color: ${(p) => p.theme.colorText};
`;

const StyledButtonText = styled.span``;

const StyledButtonIcon = styled(Unicon)`
  font-size: 30px;
  color: red;
`;

const Wrapper = ({ onClick }) => {
  const location = useLocation();

  return !location?.pathname?.includes("dashboard") ? (
    <StyledWrapper onClick={onClick}>
      <StyledButton>
        <StyledButtonText>View docs</StyledButtonText>
        <StyledButtonIcon>angle-right</StyledButtonIcon>
      </StyledButton>
    </StyledWrapper>
  ) : null;
};

export default Wrapper;
