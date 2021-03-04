import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.p`
  line-height: 1.45;
  margin-bottom: ${(p) => p.theme.lenLg2};

  & a {
    color: ${(p) => p.theme.colorPrimary};
  }
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
