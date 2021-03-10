import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  font-size: inherit;
`;

const Wrapper = ({ children, ...rest }) => {
  return <StyledIcon className={`uil uil-${children}`} {...rest} />;
};

export default Wrapper;
