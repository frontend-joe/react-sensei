import React from "react";
import styled from "styled-components";

import SidebarFooter from "./SidebarFooter";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  background: #100f10;
  color: white;
`;

export default () => {
  return (
    <StyledWrapper>
      <SidebarLogo />
      <SidebarNav />
      <SidebarFooter />
    </StyledWrapper>
  );
};
