import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  color: ${(p) => p.theme.colorLabel};
  margin-bottom: ${(p) => p.theme.lenSm3};
`;

const Wrapper = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Wrapper;
