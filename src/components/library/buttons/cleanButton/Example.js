import styled from "styled-components";
import { Card, CleanButton } from "components/library";

const StyledButtonWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default () => {
  return (
    <div className="col-lg-8 offset-lg-2">
      <Card>
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
      </Card>
    </div>
  );
};
