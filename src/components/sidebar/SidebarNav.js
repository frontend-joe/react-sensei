import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "components/routes";

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
      {routes.map((route) => (
        <StyledNavLink key={route.name} exact={route.exact} to={route.path}>
          {route.name}
        </StyledNavLink>
      ))}
    </StyledWrapper>
  );
};
