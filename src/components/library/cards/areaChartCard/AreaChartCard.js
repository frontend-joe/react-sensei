import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { rgba } from "polished";
import { useStyledTheme } from "../../hooks";
import { InfoStack } from "../../";
import { CardFixedHeight, ChartWrapper } from "../shared";

const StyledStatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledInfoStack = styled(InfoStack)`
  flex: 1 1 33.33%;
`;

const Wrapper = ({ cardTitle, statList, series }) => {
  const theme = useStyledTheme();

  const [options, setOptions] = useState({
    chart: {
      toolbar: {
        show: false,
      },
      zoom: { enabled: false },
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
    tooltip: { enabled: false },
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
  });

  useEffect(() => {
    let opacity = 0.65;
    const colors = [
      rgba(theme.colorDefaultBackground, opacity),
      rgba(theme.colorAccent, opacity),
      rgba(theme.colorPrimary, opacity),
    ];

    if (theme) {
      setOptions({
        ...options,
        fill: {
          type: "solid",
          colors,
        },
      });
    }
  }, [theme]);

  return (
    <CardFixedHeight cardTitle={cardTitle}>
      {statList && (
        <StyledStatList>
          {statList.map((stat) => (
            <StyledInfoStack value={stat.value} label={stat.label} />
          ))}
        </StyledStatList>
      )}
      <ChartWrapper>
        <Chart options={options} series={series} type="area" width="100%" />
      </ChartWrapper>
    </CardFixedHeight>
  );
};

export default Wrapper;
