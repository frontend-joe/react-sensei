import React from "react";
import styled, { css } from "styled-components";
import { Unicon } from "../";

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

const StyledOuterWrapper = styled.span``;

const StyledWrapper = styled.span`
  position: relative;
  display: block;
  ${(p) => p.size === "sm" && smBadge};
  ${(p) => p.size === "md" && mdBadge};
  ${(p) => p.size === "lg" && lgBadge};
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

const Wrapper = ({
  size = "md",
  fill,
  icon,
  isPrimary,
  isAccent,
  isDefault,
  ...rest
}) => {
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
              fill={fill || "red"}
              cx="4"
              cy="4"
              r="4"
            />
          </StyledBadgeSvg>
        </StyledSvgWrapper>
        {icon && <Unicon>{icon}</Unicon>}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
};

export default Wrapper;
