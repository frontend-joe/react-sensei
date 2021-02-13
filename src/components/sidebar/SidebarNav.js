import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledWrapper = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  color: white;

  &.active {
    color: #bd95f8;
  }
`;

export default () => {
  return (
    <StyledWrapper>
      <StyledNavLink exact to="/">
        Clean button
      </StyledNavLink>
      <StyledNavLink exact to="/cards/simple-card">
        Simple Card
      </StyledNavLink>
    </StyledWrapper>
  );
};
