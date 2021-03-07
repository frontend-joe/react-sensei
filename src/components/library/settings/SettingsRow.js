import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-bottom: ${(p) => p.theme.lenMd3};
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
