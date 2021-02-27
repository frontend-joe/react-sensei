import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../hooks";
import { Card, InfoStack } from "../../";

const StyledWrapper = styled.div`
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.lenLg1};
`;

const options = {
  chart: {
    height: 200,
  },
  grid: {
    padding: {
      top: 30,
    },
  },
  legend: { show: false },
  dataLabels: { enabled: false },
  plotOptions: { pie: { donut: { size: "75%" } } },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [30, 40, 45];

const Wrapper = ({ cardTitle, value, label }) => {
  const theme = useStyledTheme();

  const colors = [
    theme.colorPrimary,
    theme.colorAccent,
    theme.colorDefaultBackground,
  ];

  options.colors = colors;

  return (
    <Card cardTitle={cardTitle}>
      <InfoStack value={value} label={label} hideBottomMargin />
      <StyledWrapper>
        <Chart options={options} series={series} type="donut" height="100%" />
      </StyledWrapper>
    </Card>
  );
};

export default Wrapper;
