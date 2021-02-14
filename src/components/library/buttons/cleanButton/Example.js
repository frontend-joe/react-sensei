import React from "react";
import styled from "styled-components";
import { SimpleCard, CleanButton } from "components/library";

const StyledButtonWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default () => {
  return (
    <SimpleCard style={{ width: "220px" }}>
      <StyledButtonWrapper>
        <CleanButton isPrimary>Primary</CleanButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <CleanButton isAccent>Accent</CleanButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <CleanButton isDefault>Default</CleanButton>
      </StyledButtonWrapper>
      <CleanButton disabled>Disabled</CleanButton>
    </SimpleCard>
  );
};
