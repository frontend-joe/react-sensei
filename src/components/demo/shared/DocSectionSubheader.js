import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${(p) => p.theme.colorLabel};
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
