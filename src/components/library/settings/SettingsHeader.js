import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  color: ${(p) => p.theme.colorText};
  font-size: ${(p) => p.theme.lenMd3};
  margin-bottom: ${(p) => p.theme.lenMd3};
`;

const Wrapper = ({ children }) => {
  return <StyledHeader>{children || "Settings"}</StyledHeader>;
};

export default Wrapper;
