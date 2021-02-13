import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 600px;
  height: 750px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: ${(p) => p.theme.colorBackground};
  transition: background 0.35s;
`;

const Frame = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Frame;
