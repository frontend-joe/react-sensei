import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../hooks";
import { Card, InfoStack } from "../../";

const StyledWrapper = styled.div`
  ${"" /* display: flex; */}
  height: 240px;
  margin-bottom: ${(p) => p.theme.lenLg1};
`;

const options = {
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    stacked: true,
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: -4,
      bottom: -6,
      left: -10,
    },
  },
  stroke: {
    show: false,
  },
  plotOptions: {
    bar: {
      barHeight: "50%",
    },
  },
  legend: { show: false },
  dataLabels: { enabled: false },
  xaxis: {
    floating: true,
    labels: {
      show: false,
      offsetY: -10,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    maxHeight: 0,
  },
  yaxis: {
    floating: true,
    offsetX: -20,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

const Wrapper = ({ cardTitle, label, value, series }) => {
  const theme = useStyledTheme();

  const colors = [theme.colorAccent, theme.colorDefaultBackground];

  options.fill = {
    colors,
  };

  return (
    <Card cardTitle={cardTitle}>
      <InfoStack value={value} label={label} hideBottomMargin />

      <StyledWrapper>
        <Chart options={options} series={series} type="bar" height="100%" />
      </StyledWrapper>
    </Card>
  );
};

export default Wrapper;
