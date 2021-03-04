import React from "react";
import styled from "styled-components";
import { Card } from "../../";

const StyledCard = styled(Card)`
  height: ${(p) => p.theme.heightCardMd};
  min-height: ${(p) => p.theme.heightCardMd};
  max-height: ${(p) => p.theme.heightCardMd};
`;

const Wrapper = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Wrapper;
