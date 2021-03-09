import React from "react";
import styled from "styled-components";
import { v4 as uidv4 } from "uuid";
import { useStyledTheme } from "../";

const StyledWrapper = styled.div``;

const StyledFont = styled.div``;

const StyledFontLabel = styled.label`
  display: flex;
  align-items: center;
  height: ${(p) => p.theme.lenLg1};
  cursor: pointer;

  & > input {
    position: absolute;
    left: -9999px;
  }
`;

const StyledFontText = styled.span`
  color: ${(p) => (p.isActive ? p.theme.colorText : p.theme.colorLabel)};
  margin-left: ${(p) => p.theme.lenSm2};
`;

const StyledRadioButton = styled.span`
  position: relative;
  width: ${(p) => p.theme.lenMd1};
  height: ${(p) => p.theme.lenMd1};
  border-radius: 50%;
  border: 2px solid
    ${(p) => (p.isActive ? p.theme.colorPrimary : p.theme.colorBorder)};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(p) => p.theme.lenSm2};
    height: ${(p) => p.theme.lenSm2};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(${(p) => (p.isActive ? 1 : 0)});
    background: ${(p) => p.theme.colorPrimary};
    transition: transform 0.25s;
  }
`;

const fonts = [
  "Poppins",
  "Sora",
  "Space Grotesk",
  "Varela Round",
  "Comfortaa",
  // "Montserrat",
  // "Sora",
  // "Red Hat Display",
  // "Space Grotesk",
  // "Work Sans",
];

const Wrapper = ({ setFont, extraFonts }) => {
  const theme = useStyledTheme();

  const isActive = (font) => font === theme.fontFamily;

  return (
    <StyledWrapper>
      {fonts.map((font) => (
        <StyledFontLabel
          key={uidv4()}
          htmlFor={font}
          onChange={() => setFont(font)}
        >
          <input type="radio" id={font} name="font" />
          <StyledRadioButton isActive={isActive(font)}></StyledRadioButton>
          <StyledFontText isActive={isActive(font)}>{font}</StyledFontText>
        </StyledFontLabel>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
