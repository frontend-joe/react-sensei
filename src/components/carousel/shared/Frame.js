import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 750px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: ${(p) => p.theme.colorBackground};
`;

const Frame = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Frame;
