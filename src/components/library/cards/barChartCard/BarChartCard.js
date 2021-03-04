import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../hooks";
import { InfoStack } from "../../";
import { CardFixedHeight, ChartWrapper } from "../shared";

const Wrapper = ({ cardTitle, label, value, series }) => {
  const theme = useStyledTheme();

  const [options, setOptions] = useState({
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      stacked: true,
      zoom: { enabled: false },
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

  const colors = [theme.colorAccent, theme.colorDefaultBackground];

  useEffect(() => {
    if (theme) {
      setOptions({
        ...options,
        fill: {
          colors,
        },
      });
    }
  }, [theme]);

  return (
    <CardFixedHeight cardTitle={cardTitle}>
      <InfoStack value={value} label={label} />

      <ChartWrapper>
        <Chart options={options} series={series} type="bar" height="100%" />
      </ChartWrapper>
    </CardFixedHeight>
  );
};

export default Wrapper;
