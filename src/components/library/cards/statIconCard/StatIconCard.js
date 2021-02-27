import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Card } from "../../";

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(p) => p.theme.lenLg1} ${(p) => p.theme.lenMd3};
`;

const StyledLabel = styled.div`
  margin-bottom: ${(p) => p.theme.lenSm1};
  font-size: ${(p) => p.theme.lenMd1};
  color: ${(p) => p.theme.colorForDark2};
`;

const StyledValue = styled.div`
  font-size: ${(p) => p.theme.lenLg1};
  color: ${(p) => p.theme.colorForDark1};
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.lenLg3};
  height: ${(p) => p.theme.lenLg3};
  border-radius: 50%;
  background: ${rgba("black", 0.15)};
  color: ${(p) => p.theme.colorForDark1};
  font-size: ${(p) => p.theme.lenLg1};
`;

const Wrapper = ({ label, value, icon = "bars" }) => {
  return (
    <StyledCard isPrimary>
      <div>
        <StyledLabel>{label}</StyledLabel>
        <StyledValue>{value}</StyledValue>
      </div>
      <StyledIcon className={`uil uil-${icon}`} />
    </StyledCard>
  );
};

export default Wrapper;
