import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Card } from "../../";

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(p) => p.theme.lenLg1} ${(p) => p.theme.lenMd3};
  color: red;
`;

const StyledLabel = styled.div`
  margin-bottom: ${(p) => p.theme.lenSm1};
  font-size: ${(p) => p.theme.lenSm3};
  color: ${(p) => (p.isPrimary ? p.theme.colorForDark2 : p.theme.colorLabel)};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    font-size: ${(p) => p.theme.lenMd1};
  }
`;

const StyledValue = styled.div`
  font-size: ${(p) => p.theme.lenMd2};
  color: ${(p) => (p.isPrimary ? p.theme.colorForDark1 : p.theme.colorText)};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    font-size: ${(p) => p.theme.lenMd3};
  }

  @media (min-width: ${(p) => p.theme.screenWidthSm}) {
    font-size: ${(p) => p.theme.lenLg1};
  }
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 ${(p) => p.theme.lenLg2};
  width: ${(p) => p.theme.lenLg2};
  height: ${(p) => p.theme.lenLg2};
  border-radius: 50%;
  background: ${(p) =>
    !p.isPrimary ? p.theme.colorPrimary : rgba("black", 0.15)};
  color: ${(p) => p.theme.colorForDark1};
  font-size: ${(p) => p.theme.lenMd3};

  @media (min-width: ${(p) => p.theme.screenWidthXs}) {
    flex: 0 0 ${(p) => p.theme.lenLg3};
    width: ${(p) => p.theme.lenLg3};
    height: ${(p) => p.theme.lenLg3};
    font-size: ${(p) => p.theme.lenLg1};
  }
`;

const Wrapper = ({ label, value, icon = "bars", isPrimary }) => {
  return (
    <StyledCard isPrimary={isPrimary}>
      <div>
        <StyledLabel>{label}</StyledLabel>
        <StyledValue>{value}</StyledValue>
      </div>
      <StyledIcon isPrimary={isPrimary} className={`uil uil-${icon}`} />
    </StyledCard>
  );
};

export default Wrapper;
