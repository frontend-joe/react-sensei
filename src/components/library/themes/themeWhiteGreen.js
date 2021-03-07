import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);
const colorLabel = "#A4A3A6";
const colorText = "#343239";

export default {
  id: "whiteGreen",
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f0f0f9",
  colorNavbar: "#fff",
  colorNavbarLabel: colorLabel,
  colorNavbarLink: colorText,
  colorText: colorText,
  colorLabel: colorLabel,
  colorBorder: "#f0f0f9",
  colorPrimary: "#23c38f",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#0b1f18",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#e3e3e8",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#100f10",
  boxShadowLogo: `0px 0px 20px ${rgba("black", 0.12)}`,
};
