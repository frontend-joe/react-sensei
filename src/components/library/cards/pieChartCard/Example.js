import React from "react";
import styled from "styled-components";
import { Card, PieChartCard } from "components/library";

const StyledWrapper = styled.div`
  width: 260px;
`;

export default () => {
  return (
    <StyledWrapper>
      <PieChartCard cardTitle="Earnings" label="Target" value="$53k" />
    </StyledWrapper>
  );
};
