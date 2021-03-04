import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { useStyledTheme } from "../../hooks";
import { Card, InfoStack } from "../../";

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
    grid: {
      padding: {
        top: 40,
        left: 0,
        right: 0,
        bottom: 20,
      },
    },
    stroke: {
      show: false,
    },
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: { pie: { donut: { size: "75%" } } },
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
      });
    }
  }, [theme]);

  return (
    <StyledCard cardTitle={cardTitle}>
      <InfoStack value={value} label={label} />
      <StyledChart>
        <StyledChartWrapper>
          <Chart options={options} series={series} type="donut" width="100%" />
        </StyledChartWrapper>
      </StyledChart>
    </StyledCard>
  );
};

export default Wrapper;
