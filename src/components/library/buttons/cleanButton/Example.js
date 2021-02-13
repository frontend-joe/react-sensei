import React from "react";
import styled from "styled-components";
import { SimpleCard } from "components/reactzilla";
import { CleanButton } from "joes-npm-package2";

const StyledButtonWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default () => {
  return (
    <SimpleCard style={{ width: "220px" }}>
      {/* <StyledButtonWrapper>
        <CleanButton isPrimary>Primary</CleanButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <CleanButton isAccent>Accent</CleanButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <CleanButton isDefault>Default</CleanButton>
      </StyledButtonWrapper>
      <CleanButton disabled>Disabled</CleanButton> */}
      <StyledButtonWrapper>
        <CleanButton isPrimary>Primary</CleanButton>
      </StyledButtonWrapper>
      <CleanButton isDefault>Default</CleanButton>
    </SimpleCard>
  );
};
