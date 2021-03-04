import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${(p) => (!p.hideBottomMargin ? p.theme.lenMd1 : 0)};
`;

const StyledValue = styled.div`
  margin-bottom: ${(p) => p.theme.lenSm1};
  color: ${(p) => p.theme.colorText};
  font-size: ${(p) => p.theme.lenMd2};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    font-size: ${(p) => p.theme.lenMd3};
  }

  @media (min-width: ${(p) => p.theme.screenWidthSm}) {
    font-size: ${(p) => p.theme.lenLg1};
  }
`;

const StyledLabel = styled.div`
  color: ${(p) => p.theme.colorLabel};
  font-size: ${(p) => p.theme.lenMd1};
`;

const Wrapper = ({ label, value, hideBottomMargin, ...rest }) => {
  return (
    <StyledWrapper hideBottomMargin={hideBottomMargin} {...rest}>
      <StyledValue>{value}</StyledValue>
      <StyledLabel>{label}</StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
