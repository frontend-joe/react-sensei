import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const visible = css`
  visibility: visible;
  opacity: 1;
`;

const StyledWrapper = styled.div`
  position: ${(p) => p.position || "fixed"};
  z-index: ${(p) => p.zIndex || 2};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background: ${rgba("black", 0.5)};
  transition-property: visibility, opacity;
  transition-duration: 0.5s;

  ${(p) => p.isVisible && visible};
`;

const Wrapper = ({ isVisible, position, zIndex, ...rest }) => {
  return (
    <StyledWrapper
      isVisible={isVisible}
      position={position}
      zIndex={zIndex}
      {...rest}
    />
  );
};

export default Wrapper;
