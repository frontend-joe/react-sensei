import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${(p) => p.theme.colorLabel};
  font-size: ${(p) => p.theme.lenSm3};
  margin-bottom: ${(p) => p.theme.lenSm3};
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
