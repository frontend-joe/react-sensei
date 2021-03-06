import React from "react";
import { rgba } from "polished";
import styled, { css } from "styled-components";

const primary = css`
  background: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorPrimaryText};

  &:focus {
    box-shadow: 0 0 0 4px ${(p) => rgba(p.theme.colorPrimary, 0.4)};
  }
`;

const accent = css`
  background: ${(p) => p.theme.colorAccent};
  color: ${(p) => p.theme.colorAccentText};

  &:focus {
    box-shadow: 0 0 0 4px ${(p) => rgba(p.theme.colorAccent, 0.4)};
  }
`;

const def = css`
  background: ${(p) => p.theme.colorDefaultBackground};
  color: ${(p) => p.theme.colorDefaultText};

  &:focus {
    box-shadow: 0 0 0 4px ${(p) => rgba(p.theme.colorDefaultBackground, 0.74)};
  }
`;

const disabled = css`
  background: ${(p) => p.theme.colorDisabledBackground};
  color: ${(p) => p.theme.colorDisabledText};
  cursor: not-allowed;
`;

const ButtonHover = styled.span`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: ${(p) => p.theme.borderRadius};
  background: rgba(0, 0, 0, 0.075);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s;
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 2;
`;

const CleanButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 140px;
  padding: 1.035rem ${(p) => p.theme.lenMd1};
  border-radius: ${(p) => p.theme.borderRadius};

  transition-property: color, background, box-shadow;
  transition-duration: 0.35s;

  ${def};
  ${(p) => p.isPrimary && primary};
  ${(p) => p.isAccent && accent};

  &:hover:not(:disabled) ${ButtonHover} {
    opacity: 1;
  }

  &:disabled {
    ${(p) => disabled};
  }
`;

export default ({ children, isPrimary, isAccent, isDefault, ...rest }) => {
  return (
    <CleanButton
      isPrimary={isPrimary}
      isAccent={isAccent}
      isDefault={isDefault}
      {...rest}
    >
      <ButtonHover />
      <ButtonText>{children}</ButtonText>
    </CleanButton>
  );
};
