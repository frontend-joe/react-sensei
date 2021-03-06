import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import routes from "components/routes";

const sharedWrapperStyles = css`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: ${(p) => p.theme.lenLg3};
  padding: 0 ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenMd3};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    flex-direction: column;
    height: auto;
    padding: 0;
  }
`;

const StyledWrapper = styled.div`
  ${sharedWrapperStyles};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: none;
  }
`;

const StyledScrollbarWrapper = styled(PerfectScrollbar)`
  ${sharedWrapperStyles};

  display: none;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: block;
  }
`;

const StyledSectionLabel = styled.div`
  display: none;

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    display: block;
    padding: ${(p) => p.theme.lenMd3} 0;
    margin: 0 ${(p) => p.theme.lenMd3};
    color: ${(p) => p.theme.colorNavbarLabel};
    font-size: ${(p) => p.theme.lenMd1};
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  padding: 0 ${(p) => p.theme.lenMd3};
  color: ${(p) => p.theme.colorNavbarLink};
  background: ${rgba("white", 0.2)};
  margin-right: 1rem;
  border-radius: ${(p) => p.theme.borderRadius};

  &.active {
    background: ${(p) => p.theme.colorPrimary};
    color: ${(p) => p.theme.colorPrimaryText};
  }

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    background: transparent;
    height: auto;
    font-size: ${(p) => p.theme.lenMd1};
    padding: ${(p) => p.theme.lenSm3} ${(p) => p.theme.lenMd2};
    margin: 0 ${(p) => p.theme.lenMd3} ${(p) => p.theme.lenSm2};
    border-radius: ${(p) => p.theme.lenLg1};

    &.active {
      color: #fff;

      & svg {
        display: block;
      }
    }
  }
`;

const StyledBadgeSvg = styled.svg`
  display: none;
  position: absolute;
  z-index: 3;
  top: 50%;
  right: ${(p) => p.theme.lenMd2};
  transform: translateY(-50%);
`;

const BadgeSvg = () => (
  <StyledBadgeSvg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="#ffffff" />
  </StyledBadgeSvg>
);

export default () => {
  const dashboards = routes.filter((obj) => obj.isDashboard);
  const buttons = routes.filter((obj) => obj.isButton);
  const cards = routes.filter((obj) => obj.isCard);

  const NavMenu = () => (
    <>
      <StyledSectionLabel>Dashboards</StyledSectionLabel>
      {dashboards.map((route) => (
        <StyledNavLink key={route.name} exact={route.exact} to={route.path}>
          {route.name}
          <BadgeSvg />
        </StyledNavLink>
      ))}
      <StyledSectionLabel>Buttons</StyledSectionLabel>
      {buttons.map((route) => (
        <StyledNavLink key={route.name} exact={route.exact} to={route.path}>
          {route.name}
          <BadgeSvg />
        </StyledNavLink>
      ))}
      <StyledSectionLabel>Cards</StyledSectionLabel>
      {cards.map((route) => (
        <StyledNavLink key={route.name} exact={route.exact} to={route.path}>
          {route.name}
          <BadgeSvg />
        </StyledNavLink>
      ))}
    </>
  );

  return (
    <>
      <StyledScrollbarWrapper>
        <NavMenu />
      </StyledScrollbarWrapper>
      <StyledWrapper>
        <NavMenu />
      </StyledWrapper>
    </>
  );
};
