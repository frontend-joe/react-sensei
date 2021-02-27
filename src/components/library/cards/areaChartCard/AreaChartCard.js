import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../hooks";
import { Card, InfoStack } from "../../";

const StyledWrapper = styled.div`
  height: 240px;
  margin-bottom: ${(p) => p.theme.lenLg1};
`;

const StyledStatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const options = {
  chart: {
    width: "100%",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  stroke: {
    show: false,
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

const Wrapper = ({ cardTitle, statList, series }) => {
  const theme = useStyledTheme();

  const colors = [
    theme.colorDefaultBackground,
    theme.colorAccent,
    theme.colorPrimary,
  ];

  options.fill = {
    colors,
    opacity: 0.2,
  };

  return (
    <Card cardTitle={cardTitle}>
      {statList && (
        <StyledStatList>
          {statList.map((stat) => (
            <InfoStack value={stat.value} label={stat.label} hideBottomMargin />
          ))}
        </StyledStatList>
      )}

      <StyledWrapper>
        <Chart options={options} series={series} type="area" />
      </StyledWrapper>
    </Card>
  );
};

export default Wrapper;
