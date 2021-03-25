import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStyledTheme } from "../../../hooks";
import GradientLineChart from "./GradientLineChart";
import { InfoStack } from "../../../";
import { CardFixedHeight } from "../shared";

const StyledStatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledInfoStack = styled(InfoStack)`
  flex: 1 1 33.33%;
`;

const Wrapper = ({ cardTitle, statList, data }) => {
  const theme = useStyledTheme();

  const [prevThemeId, setPrevThemeId] = useState(undefined);

  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    console.log("themeChanged", themeLoaded);

    setThemeLoaded(false);

    if (theme.id !== prevThemeId) {
      setTimeout(() => {
        setThemeLoaded(true);
      }, 10);
    }
  }, [theme.id]);

  return (
    <CardFixedHeight cardTitle={cardTitle}>
      {statList && (
        <StyledStatList>
          {statList.map((stat) => (
            <StyledInfoStack value={stat.value} label={stat.label} />
          ))}
        </StyledStatList>
      )}
      {themeLoaded ? (
        <GradientLineChart
          cardTitle={cardTitle}
          statList={statList}
          data={data}
        />
      ) : null}
    </CardFixedHeight>
  );
};

export default Wrapper;
