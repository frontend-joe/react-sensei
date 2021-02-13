import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

export default ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
