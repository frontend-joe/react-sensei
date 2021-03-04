import React from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  min-height: 400px;
  opacity: 0.7;
  padding: ${(p) => p.theme.lenMd1};
`;

const StyledRow = styled.div`
  display: flex;
  margin-left: ${(p) => p.marginLeft || "0"};
`;

const green = css`
  background: #4ec9b0;
`;

const blue = css`
  background: #569cd6;
`;

const lightBlue = css`
  background: #9cdcfe;
`;

const yellow = css`
  background: #b5cea8;
`;

const pink = css`
  background: #c586c0;
`;

const orange = css`
  background: #ce9178;
`;

const glimmer = keyframes`
  0% { transform: rotate(10deg) translateX(-500%) translateY(-50%);}
  100% { transform: rotate(10deg) translateX(500%) translateY(-50%);}
`;

const pseudoElement = css`
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 50px;
  height: 200px;
  background: ${rgba("white", 0.2)};
  transform: rotate(10deg) translateX(-100%) translateY(-50%);
  animation: ${glimmer} 1.5s infinite linear;
`;

const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(p) => p.sWidth || "100px"};
  height: ${(p) => p.sHeight || "6px"};
  border-radius: ${(p) => p.theme.borderRadius};
  margin: 0 0.5rem 0.75rem 0;

  ${(p) => p.green && green};
  ${(p) => p.blue && blue};
  ${(p) => p.lightBlue && lightBlue};
  ${(p) => p.yellow && yellow};
  ${(p) => p.pink && pink};
  ${(p) => p.orange && orange};

  &::before {
    ${pseudoElement}
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledRow>
        <StyledSkeleton pink sWidth="32px" />
        <StyledSkeleton lightBlue sWidth="53px" />
        <StyledSkeleton pink sWidth="25px" />
        <StyledSkeleton orange sWidth="58px" />
      </StyledRow>
      <StyledRow>
        <StyledSkeleton pink sWidth="32px" />
        <StyledSkeleton lightBlue sWidth="125px" />
        <StyledSkeleton pink sWidth="25px" />
        <StyledSkeleton orange sWidth="44px" />
      </StyledRow>
      <StyledRow>
        <StyledSkeleton pink sWidth="26px" />
        <StyledSkeleton lightBlue sWidth="46px" />
        <StyledSkeleton pink sWidth="15px" />
        <StyledSkeleton orange sWidth="68px" />
      </StyledRow>
      <br />
      <StyledRow>
        <StyledSkeleton blue sWidth="27px" />
        <StyledSkeleton green sWidth="64px" />
        <StyledSkeleton lightBlue sWidth="45px" />
      </StyledRow>
      <StyledRow marginLeft="20px">
        <StyledSkeleton lightBlue sWidth="27px" />
        <StyledSkeleton yellow sWidth="64px" />
      </StyledRow>
      <br />
      <StyledRow>
        <StyledSkeleton blue sWidth="27px" />
        <StyledSkeleton green sWidth="34px" />
        <StyledSkeleton lightBlue sWidth="23px" />
      </StyledRow>
      <StyledRow marginLeft="20px">
        <StyledSkeleton lightBlue sWidth="27px" />
        <StyledSkeleton yellow sWidth="34px" />
      </StyledRow>
      <br />
      <StyledRow>
        <StyledSkeleton pink sWidth="27px" />
        <StyledSkeleton pink sWidth="34px" />
        <StyledSkeleton lightBlue sWidth="25px" />
      </StyledRow>
    </StyledWrapper>
  );
};

export default Wrapper;
