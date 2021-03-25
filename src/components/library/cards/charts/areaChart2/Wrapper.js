import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStyledTheme } from "../../../hooks";
import Chart from "./WrapperChart";
import { Card } from "../../../";

const StyledCard = styled(Card)`
  padding: ${(p) => p.theme.lenLg3} ${(p) => p.theme.lenLg2}
    ${(p) => p.theme.lenMd1};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitleStack = styled.div`
  margin-bottom: ${(p) => p.theme.lenMd1};
`;

const StyledTitle = styled.div`
  margin-bottom: ${(p) => p.theme.lenSm2};
  color: ${(p) => p.theme.colorLabel};
`;

const StyledValue = styled.div`
  font-size: ${(p) => p.theme.lenLg1};
  color: ${(p) => p.theme.colorText};
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(p) => p.theme.lenMd2};
  color: ${(p) => (p.isAccent ? p.theme.colorAccent : p.theme.colorPrimary)};
`;

const StyledAddButtonText = styled.span`
  color: inherit;
`;

const StyledAddButtonIcon = styled.span`
  color: inherit;
`;

const Wrapper = ({
  id,
  cardTitle,
  cardValue,
  statList,
  data,
  isAccent,
  markerIndex,
}) => {
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
    <StyledCard>
      <StyledHeader>
        <StyledTitleStack>
          <StyledTitle>{cardTitle}</StyledTitle>
          <StyledValue>{cardValue}</StyledValue>
        </StyledTitleStack>
        <StyledAddButton isAccent={isAccent}>
          <StyledAddButtonText>Add New</StyledAddButtonText>
          <StyledAddButtonIcon className="material-icons">
            keyboard_arrow_right
          </StyledAddButtonIcon>
        </StyledAddButton>
      </StyledHeader>

      {themeLoaded ? (
        <Chart
          id={id}
          markerIndex={markerIndex}
          isAccent={isAccent}
          data={data}
        />
      ) : null}
    </StyledCard>
  );
};

export default Wrapper;
