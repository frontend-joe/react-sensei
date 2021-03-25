import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../../hooks";
import { Card, InfoStack } from "../../../";

const StyledCard = styled(Card)`
  height: ${(p) => p.theme.heightCardMd};
  min-height: ${(p) => p.theme.heightCardMd};
  max-height: ${(p) => p.theme.heightCardMd};
`;

const StyledChart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.lenLg1};
  height: ${(p) => p.theme.heightChartMd};
  transform: translateX(0);
  margin-top: 2rem;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    margin-top: 0;
  }
`;

const StyledChartWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 240px;
`;

const Wrapper = ({ cardTitle, value, label, series }) => {
  const theme = useStyledTheme();

  const [options, setOptions] = useState({
    chart: {
      animations: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        top: 40,
        left: 0,
        right: 0,
        bottom: 20,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      radialBar: {
        offsetX: 0,
        offsetY: 0,
        hollow: {
          margin: 0,
          size: "35%",
          position: "front",
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: theme.colorBackground,
          strokeWidth: "97%",
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
      },
    },
  });

  const colors = [
    theme.colorPrimary,
    theme.colorAccent,
    theme.colorDefaultBackground,
  ];

  useEffect(() => {
    if (theme) {
      setOptions({
        ...options,
        colors,
        plotOptions: {
          ...options.plotOptions,
          radialBar: {
            ...options.plotOptions.radialBar,
            track: {
              ...options.plotOptions.radialBar.track,
              background: theme.colorBackground,
            },
          },
        },
      });
    }
  }, [theme]);

  return (
    <StyledCard cardTitle={cardTitle}>
      <InfoStack value={value} label={label} />
      <StyledChart>
        <StyledChartWrapper>
          {options.colors && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              width="100%"
            />
          )}
        </StyledChartWrapper>
      </StyledChart>
    </StyledCard>
  );
};

export default Wrapper;
