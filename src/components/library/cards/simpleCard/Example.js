import React from "react";
import styled from "styled-components";
import { SimpleCard } from "components/library";

const StyledWrapper = styled.div`
  width: 360px;
`;

export default () => {
  return (
    <StyledWrapper>
      <SimpleCard cardTitle="Simple Card">
        I'm a simple card with a title
      </SimpleCard>
      <SimpleCard isPrimary>I'm a simple primary card</SimpleCard>
      <SimpleCard isAccent>I'm a simple accent card</SimpleCard>
    </StyledWrapper>
  );
};
