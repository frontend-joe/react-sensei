import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.button`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 50%;
  border-top-left-radius: ${(p) => p.theme.lenLg1};
  border-bottom-left-radius: ${(p) => p.theme.lenLg1};
  padding-left: ${(p) => p.theme.lenSm3};
  padding-right: ${(p) => p.theme.lenMd1};
  padding-top: ${(p) => p.theme.lenSm3};
  padding-bottom: ${(p) => p.theme.lenSm3};
  transform: translateY(-50%);
  background: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorPrimaryText};
  box-shadow: 0px 0px 10px ${rgba("black", 0.12)};
`;

const wiggle = keyframes`
  0% { transform: rotate(-20deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-20deg); }
`;

const StyledIcon = styled.span`
  display: block;
  font-size: ${(p) => p.theme.lenMd2};
  animation: ${wiggle} 1.375s infinite;
`;

const Wrapper = ({ onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledIcon className="uil uil-wrench" />
    </StyledWrapper>
  );
};

export default Wrapper;
