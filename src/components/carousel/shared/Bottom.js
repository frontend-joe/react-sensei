import React from "react";
import styled from "styled-components";

import frontendjoe from "assets/frontendjoe.png";
import frontendjoeFordark from "assets/frontendjoe-fordark.png";
import arrow from "assets/arrow.png";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 28px;
`;

const StyledFrontendjoe = styled.img`
  height: 44px;
`;

const StyledArrow = styled.img`
  height: 28px;
`;

const Bottom = ({ isDarkTheme }) => {
  return (
    <StyledWrapper>
      <StyledFrontendjoe src={isDarkTheme ? frontendjoeFordark : frontendjoe} />
      <StyledArrow src={arrow} />
    </StyledWrapper>
  );
};

export default Bottom;
