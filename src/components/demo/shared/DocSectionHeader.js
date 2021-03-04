import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${(p) => p.theme.colorPrimary};
  font-weight: ${(p) => p.theme.fontWeightSemibold};
  margin-bottom: ${(p) => p.theme.lenMd1};
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
