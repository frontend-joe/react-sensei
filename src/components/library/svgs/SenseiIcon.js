import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg``;

const StyledPath = styled.path`
  fill: white;
`;

const Wrapper = ({ ...rest }) => {
  return (
    <StyledSvg
      {...rest}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31 17.3704L16.165 6L1 17.3704C1.57219 17.5962 2.16276 17.8074 2.76902 18.0043C10.9752 20.6686 22.0549 20.6866 29.3196 18.0583C29.9057 17.8463 30.467 17.617 31 17.3704ZM27.8173 16.9069L16.1547 7.96796L4.3258 16.837C8.03193 17.9005 12.2968 18.4439 16.4934 18.4439C20.6278 18.4439 24.5932 17.9166 27.8173 16.9069Z"
        fill="white"
      />
      <StyledPath
        d="M8.23133 21.5816C10.8902 22.0781 13.6873 22.3228 16.4246 22.3228C18.8849 22.3228 21.3338 22.1251 23.6214 21.7192V23.3264L15.9264 27L8.23133 23.3264V21.5816Z"
        fill="white"
      />
    </StyledSvg>
  );
};

export default Wrapper;
