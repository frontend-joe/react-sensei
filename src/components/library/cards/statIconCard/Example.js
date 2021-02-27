import React from "react";
import styled from "styled-components";
import { Card, StatIconCard } from "components/library";

const StyledWrapper = styled.div`
  width: 260px;
`;

export default () => {
  return (
    <StyledWrapper>
      <StatIconCard label="Revenue" value="$34k" icon="dollar-alt" />
    </StyledWrapper>
  );
};
