import React from "react";
import styled from "styled-components";

const StyledChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.lenLg1};
  height: ${(p) => p.theme.heightChartMd};
  width: 100%;
`;

const Wrapper = ({ children }) => {
  return <StyledChart>{children}</StyledChart>;
};

export default Wrapper;
