import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { useStyledTheme } from "../../../hooks";
import { Card, Badge, InfoStack } from "../../../";

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(p) => p.theme.lenLg1} ${(p) => p.theme.lenMd3};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    min-height: 128px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledCol = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  margin-right: ${(p) => p.theme.lenMd1};
`;

const Wrapper = ({ items, badgeSize, badgeFill }) => {
  const theme = useStyledTheme();

  const colors = [
    theme.colorPrimary,
    theme.colorAccent,
    theme.colorDefaultBackground,
  ];

  return (
    <StyledCard>
      <StyledRow>
        {colors &&
          items &&
          items.map((item, index) => (
            <StyledCol>
              <StyledBadge
                size={badgeSize || "lg"}
                fill={badgeFill || colors[index]}
                icon={item.icon}
              />
              <InfoStack
                hideBottomMargin
                alignItems="flex-start"
                label={item.label}
                value={item.value}
              />
            </StyledCol>
          ))}
      </StyledRow>
    </StyledCard>
  );
};

export default Wrapper;
