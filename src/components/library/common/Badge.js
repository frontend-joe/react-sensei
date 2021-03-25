import React from "react";
import styled, { css } from "styled-components";
import { Unicon } from "../";

console.log("unicon", Unicon);

const primaryBadge = css`
  fill: ${(p) => p.theme.colorPrimary};

  & span {
    color: ${(p) => p.theme.colorPrimaryText};
  }
`;

const accentBadge = css`
  fill: ${(p) => p.theme.colorAccent};

  & span {
    color: ${(p) => p.theme.colorAccentText};
  }
`;

const defaultBadge = css`
  fill: ${(p) => p.theme.colorDefaultBackground};

  & span {
    color: ${(p) => p.theme.colorDefaultText};
  }
`;

const smBadge = css`
  width: ${(p) => p.theme.lenSm1};
  height: ${(p) => p.theme.lenSm1};
`;

const mdBadge = css`
  width: ${(p) => p.theme.lenSm2};
  height: ${(p) => p.theme.lenSm2};
`;

const lgBadge = css`
  width: ${(p) => p.theme.lenSm3};
  height: ${(p) => p.theme.lenSm3};
`;

const xlBadge = css`
  width: ${(p) => p.theme.lenLg1};
  height: ${(p) => p.theme.lenLg1};
`;

const xxlBadge = css`
  width: ${(p) => p.theme.lenXl1};
  height: ${(p) => p.theme.lenXl1};
`;

const StyledOuterWrapper = styled.span``;

const StyledWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) => p.size === "sm" && smBadge};
  ${(p) => p.size === "md" && mdBadge};
  ${(p) => p.size === "lg" && lgBadge};
  ${(p) => p.size === "xl" && xlBadge};
  ${(p) => p.size === "xxl" && xxlBadge};
`;

const StyledSvgWrapper = styled.span`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledBadgeSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledBadgeCircle = styled.circle`
  ${(p) => p.isPrimary && primaryBadge};
  ${(p) => p.isAccent && accentBadge};
  ${(p) => p.isDefault && defaultBadge};
`;

const StyledIcon = styled.span`
  position: relative;
  z-index: 2;

  & span {
    color: white;
  }
`;

const Wrapper = ({
  size = "md",
  fill,
  icon,
  isPrimary,
  isAccent,
  isDefault,
  ...rest
}) => {
  console.log("icon", icon);

  return (
    <StyledOuterWrapper {...rest}>
      <StyledWrapper size={size}>
        <StyledSvgWrapper>
          <StyledBadgeSvg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <StyledBadgeCircle
              isPrimary={isPrimary}
              isAccent={isAccent}
              isDefault={isDefault}
              fill={fill || "transparent"}
              cx="4"
              cy="4"
              r="4"
            />
          </StyledBadgeSvg>
        </StyledSvgWrapper>
        {icon && (
          <StyledIcon>
            <Unicon>{icon}</Unicon>
          </StyledIcon>
        )}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
};

export default Wrapper;
