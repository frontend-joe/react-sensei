import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  height: 100%;
`;

const StyledPath = styled.path`
  fill: ${(p) => p.theme.colorPrimary};
`;

const Wrapper = ({ ...rest }) => {
  return (
    <StyledSvg
      {...rest}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledPath
        d="M6.46498 29.0924C2.89447 25.5219 2.89447 19.733 6.46498 16.1625L16.1624 6.465C19.7329 2.89449 25.5219 2.89449 29.0924 6.465L38.7899 16.1625C42.3604 19.733 42.3604 25.5219 38.7899 29.0924L29.0924 38.7899C25.5219 42.3604 19.7329 42.3604 16.1624 38.7899L6.46498 29.0924Z"
        fill="#46454A"
      />
    </StyledSvg>
  );
};

export default Wrapper;
