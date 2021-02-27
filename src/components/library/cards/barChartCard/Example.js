import React from "react";
import styled from "styled-components";
import { Card, BarChartCard } from "components/library";

const StyledWrapper = styled.div`
  width: 260px;
`;

const series = [
  {
    name: "series1",
    data: [10, 35, 10, 44, 10, 10, 20, 30, 35, 10, 44, 10, 20, 30],
  },
  {
    name: "series2",
    data: [30, 45, 35, 10, 64, 10, 40, 30, 35, 10, 44, 10, 20, 10],
  },
];

export default () => {
  return (
    <StyledWrapper>
      <BarChartCard
        cardTitle="Users"
        label="Today"
        value="234"
        series={series}
      />
    </StyledWrapper>
  );
};
