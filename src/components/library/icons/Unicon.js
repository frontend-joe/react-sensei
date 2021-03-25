import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  font-size: inherit;
`;

const Wrapper = ({ children }) => {
  return <StyledIcon className={`uil uil-${children}`} />;
};

export default Wrapper;
