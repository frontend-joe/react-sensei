import React from "react";
import styled from "styled-components";

import NavbarFooter from "./NavbarFooter";
import NavbarLogo from "./NavbarLogo";
import NavbarNav from "./NavbarNav";

const StyledWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(p) => p.theme.colorNavbar};
  color: white;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    width: 220px;
    max-width: 220px;
    min-width: 220px;
  }
`;

export default () => {
  return (
    <StyledWrapper>
      <NavbarLogo />
      <NavbarNav />
      {/* <NavbarFooter /> */}
    </StyledWrapper>
  );
};
