import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  padding: ${(p) => p.theme.lenMd3};
  transform: translateX(${(p) => (p.isOpen ? 0 : "100%")});
  background: ${(p) => p.theme.colorCardBackground};

  transition: transform 0.35s;
`;

const Wrapper = ({ children, isSettingsOpen, setSettingsOpen }) => {
  return <StyledWrapper isOpen={isSettingsOpen}>{children}</StyledWrapper>;
};

export default Wrapper;
