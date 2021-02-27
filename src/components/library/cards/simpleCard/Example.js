import React from "react";
import styled from "styled-components";
import { Card } from "components/library";

const StyledWrapper = styled.div`
  width: 360px;
`;

export default () => {
  return (
    <StyledWrapper>
      <Card cardTitle="Simple Card">I'm a simple card with a title</Card>
      <Card isPrimary>I'm a simple primary card</Card>
      <Card isAccent noBottomMargin>
        I'm a simple accent card
      </Card>
    </StyledWrapper>
  );
};
