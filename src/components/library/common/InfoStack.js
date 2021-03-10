import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: ${(p) => p.alignItems};
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${(p) => (!p.hideBottomMargin ? p.theme.lenMd1 : 0)};
`;

const StyledValue = styled.div`
  margin-bottom: ${(p) => (p.isValueFirst ? p.theme.lenSm1 : 0)};
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
  margin-bottom: ${(p) => (!p.isValueFirst ? p.theme.lenSm1 : 0)};
`;

const Wrapper = ({
  label,
  value,
  hideBottomMargin,
  isValueFirst,
  alignItems = "center",
  ...rest
}) => {
  return (
    <StyledWrapper
      hideBottomMargin={hideBottomMargin}
      alignItems={alignItems}
      {...rest}
    >
      {isValueFirst ? (
        <>
          <StyledValue isValueFirst={isValueFirst}>{value}</StyledValue>
          <StyledLabel isValueFirst={isValueFirst}>{label}</StyledLabel>
        </>
      ) : (
        <>
          <StyledLabel isValueFirst={isValueFirst}>{label}</StyledLabel>
          <StyledValue isValueFirst={isValueFirst}>{value}</StyledValue>
        </>
      )}
    </StyledWrapper>
  );
};

export default Wrapper;
