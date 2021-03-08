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
  padding: 0 ${(p) => p.theme.lenMd3} 0;

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

const StyledNavLinkButton = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 ${(p) => p.theme.lenMd3};
  height: ${(p) => p.theme.lenLg2};
  color: ${(p) => p.theme.colorNavbarLink};
  background: ${rgba("white", 0.2)};
  border-radius: ${(p) => p.theme.borderRadius};

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    background: transparent;
    height: auto;
    font-size: ${(p) => p.theme.lenMd1};
    padding: ${(p) => p.theme.lenSm3} ${(p) => p.theme.lenMd2};
    width: 100%;
    border-radius: ${(p) => p.theme.lenLg1};
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => p.theme.lenXl1};
  padding: ${(p) => p.theme.lenMd1} ${(p) => p.theme.lenSm2}
    ${(p) => p.theme.lenMd1} 0;

  &.active ${StyledNavLinkButton} {
    background: ${(p) => p.theme.colorPrimary};
    color: ${(p) => p.theme.colorPrimaryText};
  }

  @media (min-width: ${(p) => p.theme.screenWidthMd}) {
    padding: 0 ${(p) => p.theme.lenMd3};
    height: auto;
    margin-bottom: ${(p) => p.theme.lenSm2};

    &.active ${StyledNavLinkButton} {
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
  const dashboards = {
    name: "Dashboards",
    routes: routes.filter((obj) => obj.isDashboard),
  };

  const buttons = {
    name: "Buttons",
    routes: routes.filter((obj) => obj.isButton),
  };

  const cards = {
    name: "Cards",
    routes: routes.filter((obj) => obj.isCard),
  };

  const menu = [dashboards, buttons, cards];

  const NavMenu = () =>
    menu.map((m) => (
      <>
        <StyledSectionLabel>{m.name}</StyledSectionLabel>
        {m.routes.map((route) => (
          <StyledNavLink key={route.name} exact={route.exact} to={route.path}>
            <StyledNavLinkButton>
              {route.name}
              <BadgeSvg />
            </StyledNavLinkButton>
          </StyledNavLink>
        ))}
      </>
    ));

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
