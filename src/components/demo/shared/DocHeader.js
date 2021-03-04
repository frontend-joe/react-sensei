import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-bottom: ${(p) => p.theme.lenLg2};
`;

const StyledTitle = styled.div`
  font-weight: ${(p) => p.theme.fontWeightSemibold};
  font-size: ${(p) => p.theme.lenMd3};
  margin-bottom: ${(p) => p.theme.lenSm1};
`;

const StyledSubtitle = styled.div`
  font-size: ${(p) => p.theme.lenMd1};
  color: ${(p) => p.theme.colorLabel};
`;

const Wrapper = ({ title, subtitle }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledWrapper>
  );
};

export default Wrapper;
