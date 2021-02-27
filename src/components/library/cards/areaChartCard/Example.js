import React from "react";
import styled from "styled-components";
import { Card, AreaChartCard } from "components/library";

const StyledWrapper = styled.div`
  width: 450px;
`;

const series = [
  {
    name: "series1",
    data: [0, 35, 10, 44, 10, 0, 0],
  },
  {
    name: "series2",
    data: [0, 5, 35, 10, 64, 10, 0],
  },
  {
    name: "series3",
    data: [0, 20, 10, 30, 20, 28, 0],
  },
];

export default () => {
  const statList = [
    {
      label: "Revenue",
      value: "$34.5k",
    },
    {
      label: "Profit",
      value: "$2.5k",
    },
    {
      label: "Orders",
      value: "811",
    },
  ];

  return (
    <StyledWrapper>
      <AreaChartCard cardTitle="Sales" statList={statList} series={series} />
    </StyledWrapper>
  );
};
